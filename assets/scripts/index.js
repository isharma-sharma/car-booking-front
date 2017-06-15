'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const ui = require('./auth/ui.js')
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
    $('#allcars').show()
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
    $('#alcr').hide()
    $('#crcr').hide()
    $('#crtnewcar').hide()
  })
  $('#sign-out-btn').click(function () {
    $('#sign-in').show()
    $('#sign-up').hide()
    $('#change-password').hide()
    $('#cardtl').hide()
    $('#success').hide()
    $('#error').hide()
    $('#alcr').hide()
    $('#crcr').hide()
    $('#crtnewcar').hide()
  })
  $('#allcars').click(function () {
  //  $('#cardtl').hide()
      // let data = {}
      // ui.getAllCarsSuccess(data)
    $('#allcars').toggle()
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
  // $('#succmsg').text('your car is now added click the CAR LIST BUTTON to check your car')
})
$('#crtnewcar').click(function () {
  // $('#cardtl', 'input[type="text"]').text(' ')
  $('#cardtl').show()
})
