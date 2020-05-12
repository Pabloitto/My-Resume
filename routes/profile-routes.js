var express = require('express');
var profileRouter = express.Router();
var profileController = require('../controllers/profile-controller')();

module.exports = function() {
    var route = profileRouter.route('/');

    route.get(profileController.fetchProfile);

    return profileRouter;
}