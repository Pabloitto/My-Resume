const PENDING_REQUESTS_LIMIT = 2000
const LAST_REQUEST_LIMIT = 500
const POOL_INTERVAL = 100
const TIME_WITHOUT_REQUEST_LIMIT = 3000

const PdfPageAwaiter = (page) => {
  let requests = []
  let intervalId = null
  let lastRequestDate = null
  let timeElapsed = 0

  const clearAwaiter = () => {
    clearInterval(intervalId)
    intervalId = null
    lastRequestDate = null
    requests = []
  }

  const handleLastRequestExpires = (onLastRequestExpires, options) => {
    if (options.forceExpire) {
      console.log('Time waiting for ready expired, start trying to print pdf...')
      clearAwaiter()
      onLastRequestExpires()
      return
    }
    const today = Date.now()
    const timeSinceLastRequest = today - lastRequestDate
    if (timeSinceLastRequest > options.expirationTime) {
      console.log('Time waiting for ready expired, start trying to print pdf...')
      clearAwaiter()
      onLastRequestExpires()
    }
  }

  const wait = () => {
    return new Promise((resolve) => {
      page.on('request', async (request) => {
        const url = request.url()
        lastRequestDate = Date.now()
        console.log(`Request ${requests.length} Start`, url)
        requests.push({
          url,
          pending: true,
          timeStamp: lastRequestDate
        })
      })

      page.on('requestfinished', async (request) => {
        const url = request.url()
        console.log('Request Finished', url)
        const currentRequest = requests.find(item => item.url === url)
        if (currentRequest) {
          currentRequest.pending = false
        }
      })

      intervalId = setInterval(() => {
        timeElapsed += POOL_INTERVAL
        if (requests.length === 0) {
          if (timeElapsed >= TIME_WITHOUT_REQUEST_LIMIT) {
            console.log(timeElapsed, TIME_WITHOUT_REQUEST_LIMIT)
            handleLastRequestExpires(resolve, { forceExpire: true })
          }
          return
        };
        const pendingRequests = requests.some(r => r.pending === true)
        const expirationTime = pendingRequests ? PENDING_REQUESTS_LIMIT : LAST_REQUEST_LIMIT
        handleLastRequestExpires(resolve, { expirationTime })
      }, POOL_INTERVAL)
    })
  }

  return {
    wait
  }
}

module.exports = {
  PdfPageAwaiter
}
