const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const {PdfEngine} = require("./pdf.engine");
const app = express();

const pdfEngine = PdfEngine();

function init() {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.resolve(__dirname, "public")));
  initRoutes();
  startServer();
}

function initRoutes() {
  var profileRoutes = require("./routes/profile-routes")();
  app.use("/api/profile", profileRoutes);
  const pdfRoutes = require("./routes/pdf.router")({
    pdfEngine,
    logger: console,
  });
  app.use("/api/pdf", pdfRoutes);
}

function startServer() {
  app.set("port", process.env.PORT || 8085);
  app.listen(app.get("port"), async function () {
    await pdfEngine.init({ logger: console });
    console.log("Node app is running on port", app.get("port"));
  });
}

init();
