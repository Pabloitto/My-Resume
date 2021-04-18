const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const { PdfEngine } = require('./pdf.engine')
const app = express()

const pdfEngine = PdfEngine()

function init () {
  app.use(bodyParser.json());
  app.use(express.static(path.resolve(__dirname, 'public')))
  initRoutes()
  startServer()
}

function initRoutes () {
  const profileRoutes = require('./routes/profile-routes')()
  app.use('/api/profile', profileRoutes)
  const pdfRoutes = require('./routes/pdf.router')({
    pdfEngine,
    logger: console
  })
  app.use('/api/pdf', pdfRoutes)
}

function startServer () {
  app.set('port', process.env.PORT || 8085)

  const port = app.get('port')

  app.listen(port, async function () {
    await pdfEngine.init({
      logger: console
    })

    console.log(`Server running at port: ${port}`)
  })
}

init()
