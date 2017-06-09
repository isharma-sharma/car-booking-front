'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
//  const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
const authEvents = require('./auth/event.js')

$(() => {
  authEvents.addHandlers()
})

$(document).ready(function () {
  // On first load
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#change-password').hide()
  $('#cardtl').hide()

  // Login function
  $('#login-btn').click(function () {
    $('#sign-in').show()
    $('#sign-up').hide()
    $('#change-password').hide()
    $('#cardtl').show()
  })
  // sign-up function
  $('#sign-up-btn').click(function () {
    $('#sign-up').show()
    $('#sign-in').hide()
    $('#change-password').hide()
    $('#cardtl').hide()
  })
  $('#changePassword-btn').click(function () {
    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#change-password').show()
    $('#cardtl').hide()
  })
  $('#sign-out-btn').click(function () {
    $('#sign-in').show()
    $('#sign-up').hide()
    $('#change-password').hide()
    $('#cardtl').hide()
  })
})
