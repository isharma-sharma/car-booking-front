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
// })

// $(document).ready(function () {
  // On first load
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#change-password').hide()
  $('#cardtl').hide()
  $('#updetail').hide()
  $('#success').hide()
  $('#error').hide()
  $('#allcars').hide()
  $('#crtnewcar').hide()
  $('#sign-out-btn').hide()
  $('#changePassword-btn').hide()

  // Login function
  $('#login-btn').click(function () {
    $('#sign-in').show()
    $('#sign-up').hide()
    $('#cardtl').hide()
    $('#success').hide()
    $('#error').hide()
  })
  // sign-up function
  $('#sign-up-btn').click(function () {
    $('#sign-up').show()
    $('#sign-in').hide()
    $('#change-password').hide()
    $('#cardtl').hide()
    $('#success').hide()
    $('#error').hide()
  })
  $('#changePassword-btn').click(function () {
    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#change-password').show()
    $('#cardtl').hide()
    $('#success').hide()
    $('#error').hide()
  })
  $('#sign-out-btn').click(function () {
    $('#sign-in').show()
    $('#sign-up').hide()
    $('#change-password').hide()
    $('#cardtl').hide()
    $('#success').hide()
    $('#error').hide()
  })
  $('#allcars').click(function () {
    // $('#cardtl').hide()
    $('#allcars').toggle()
    $('#success').hide()
    $('#error').hide()
  })
  $('.removebtn').click(function () {
    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#change-password').hide()
    // $('#cardtl').hide()
    $('#success').hide()
    $('#error').hide()
  })
})
$('#updt').click(function () {
  $('#cardtl').hide()
  $('#success').show()
  $('#succmsg').text('your car is now added on the list')
})
$('#crtnewcar').click(function () {
  $('#cardtl').show()
})
// $('body').on('click', '#login-btn', $('#tog').hide())
