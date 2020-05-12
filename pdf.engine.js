const puppeteer = require('puppeteer');

const { PdfPageAwaiter } = require('./pdf.page.awaiter');

const PdfEngine = () => {
	let browser;
	let browserWSEndpoint;
	let logger;

	const tryToGo = async (page, url) => {
		try {
			await page.goto(url, {
				waitUntil: 'domcontentloaded',
				timeout: 15000
			});
		} catch (err) {
			logger.info(`Error navigating to ${url}`, err);
		}
	};

	const init = async options => {
		logger = options.logger;
		browser = await puppeteer.launch({
			headless: true,
			devtools: false,
			ignoreHTTPSErrors: true,
			args: [
				'--disable-dev-shm-usage',
				'--no-sandbox',
				'--disable-setuid-sandbox',
				'--user-data-dir=/tmp/session-123'
				// '--ignore-certificate-errors'
			]
		});
		browserWSEndpoint = browser.wsEndpoint();
	};

	const reconnect = async () => {
		if (browser && !browser.isConnected()) {
			browser = await puppeteer.connect({
				browserWSEndpoint: `${browserWSEndpoint}?--user-data-dir=/tmp/session-123`
			});
		} else if (!browser) {
			await init();
		}
	};

	const build = async ({ url, pdfConfig = {} }) => {
		try {
			await reconnect();

			const page = await browser.newPage();
			await page.emulateMedia('screen');

			if (url) {
				const pdfPageAwaiter = PdfPageAwaiter(page);
				await tryToGo(page, url);
				logger.info('Start Waiting the requests');
				await pdfPageAwaiter.wait();
			}

			logger.info('Calling to Page PDF Function');

			const defaultConfig = {
				landscape: false,
				format: 'Letter',
				printBackground: true
			};

			const buffer = await page.pdf(
				Object.assign({}, defaultConfig, pdfConfig)
			);

			return buffer;
		} catch (err) {
			logger.error('Error building the pdf', err);
			throw err;
		} finally {
			if (browser) {
				browser.disconnect();
			}
		}
	};

	return {
		build,
		init
	};
};

module.exports = {
	PdfEngine
};
