module.exports = ({
  pdfEngine,
  logger
}) => {
  async function downloadPdf (req, res) {
    try {
      const fileName = req.body.fileName || `temp_file_${new Date().toString()}`
      logger.info(`Generating pdf ${fileName}`, req.body)
      const pdfBuffer = await pdfEngine.build(req.body)
      res.setHeader('Content-Type', 'application/application-pdf')
      res.setHeader('Content-Disposition', `attachment; filename=${fileName}.pdf`)
      res.end(pdfBuffer, 'binary')
    } catch (err) {
      const message = 'Something went wrong trying to generate the PDF'
      logger.error(message, err.message)
      res.status(500).send(message)
    }
  }

  return {
    downloadPdf: downloadPdf
  }
}
