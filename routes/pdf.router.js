const express = require('express')

const pdfRouter = express.Router()

module.exports = ({
  pdfEngine,
  logger
}) => {
  const pdfController = require('../controllers/pdf.controller')({
    pdfEngine,
    logger
  })

  const route = pdfRouter.route('/download')

  route.post(pdfController.downloadPdf)

  return pdfRouter
}
