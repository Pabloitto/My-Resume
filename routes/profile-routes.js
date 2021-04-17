const express = require('express')
const profileRouter = express.Router()
const profileController = require('../controllers/profile-controller')()

module.exports = function () {
  const route = profileRouter.route('/')

  route.get(profileController.fetchProfile)

  return profileRouter
}
