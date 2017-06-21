// const api = require('./api')
// const event = require('./event.js')
// const store = require('../store')
const showCarsTemplate = require('../templates/car-listing.handlebars')
const showSingleCarTemplate = require('../templates/single_car.handlebars')

const signUpSuccess = (data) => {
  console.log(data)
  $('#sign-up').hide()
  $('#sign-up-btn').hide()
  $('#sign-in').show()
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('signUpSuccess now signin')
}
const signUpFailure = (error) => {
  console.error(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Signup failed.Please input proper data')
}
const signInSuccess = (data) => {
  // $('#show-game-panel').show() will add the id of add car form
  $('#sign-in').hide()
  $('#login-btn').hide()
  $('#sign-up-btn').hide()
  $('#cardtl').show()
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('welcome user')
  $('#allcars').show()
  $('#sign-out-btn').show()
  $('#changePassword-btn').show()
  // $('#userId').text(store.userId) will be used to show id of the person who has added the car
}

const signInFailure = (error) => {
  console.error(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('SignIn failed.new user sign-up first')
  $('#cardtl').hide()
  $('#new').show()
}

const changePasswordSuccess = (data) => {
  $('#change-password').hide()
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('your password has been changed')
  $('#changePassword-btn').hide()
}

const changePasswordFailure = (error) => {
  console.error(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Please input proper data')
}
const signOutSuccess = (data) => {
  $('#sign-in').show()
  $('#sign-up').hide()
  // $('#game-board').hide()
  $('#change-password').hide()
  // $('#show-game-panel').hide()$('#change-password').hide()
  console.log('on signOutSuccess')
  $('#error').hide()
  $('#allcars').hide()
}

const signOutFailure = (error) => {
  console.log(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Signout failed.')
}
const createCarSuccess = (data) => {
  // $('.empfor', 'input[type="text"]').empty()
  console.log(data)
  $('#error').hide()
  $('#succmsg').text('your car is now added on the list')
  $('#crtnewcar').show()
  const showsinglecarHtml = showSingleCarTemplate({car: data.car})
  // const showcarsHtml = showCarsTemplate({ cars: data.car })
  $('#alcr').append(showsinglecarHtml)
  console.log('create a car done')
}

const createCarFailure = (error) => {
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('input all the field')
  console.log(error)
}
const getAllCarsSuccess = (data) => {
  $('.bleh').empty()
  if (data.cars.length === 0) {
    $('#success').show()
    $('#succmsg').text('no cars')
    // $('#succmsg').fadeout()
  } else {
    console.log(data)
    $('#alcr').show()
    $('#alcr').empty()
    const showcarsHtml = showCarsTemplate({ cars: data.cars })
    $('#alcr').html(showcarsHtml)
    $('#success').show()
    $('#error').hide()
    $('#succmsg').text('list of cars')
  }
  // <!-- have uncommented because it shows on when their  is no cars in the list -->
}

const getAllCarsFailure = (error) => {
  console.log(error)
}
const onUpdateCarSuccess = (data) => {
  console.log(data)
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('your repair has been changed')
}
const onUpdateCarFailure = (error) => {
  console.error(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Update failed! try again.')
}

const removeCarSuccess = (data) => {
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').hide()
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('car has been removed from list')
  console.log('on RemoveCarSuccess')
}
const removeCarFailure = (error) => {
  console.error(error)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createCarSuccess,
  createCarFailure,
  getAllCarsSuccess,
  getAllCarsFailure,
  onUpdateCarSuccess,
  onUpdateCarFailure,
  removeCarSuccess,
  removeCarFailure
}
