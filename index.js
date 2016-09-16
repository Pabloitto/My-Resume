var http = require('http'),
     path = require('path'),
     express = require('express'),
     app = express(),
     bodyParser = require('body-parser');

 function init() {
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({ extended: true }));
     app.use(express.static(path.resolve(__dirname, 'public')));
     initRoutes();
     startServer();
 }

 function initRoutes() {
       var profileRoutes = require("./routes/profile-routes")();
       app.use('/', profileRoutes);
 }

 function startServer() {
     app.set('port', (process.env.PORT || 8081));
     app.listen(app.get('port'), function() {
         console.log('Node app is running on port', app.get('port'));
     });
 }

 init();