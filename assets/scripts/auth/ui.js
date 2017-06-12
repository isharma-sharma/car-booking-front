const api = require('./api')
const event = require('./event.js')
const store = require('../store')
const showCarsTemplate = require('../templates/car-listing.handlebars')

const signUpSuccess = (data) => {
  console.log(data)
  $('#sign-up').hide()
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
  $('#cardtl').show()
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('welcome user')
  // $('#userId').text(store.userId) will be used to show id of the person who has added the car
}

const signInFailure = (error) => {
  console.error(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('SignIn failed.Please input proper data')
}

const ChangepasswordSuccess = (data) => {
  // console.log(data)
  $('#change-password').hide()
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('your password has been changed')
}

const ChangepasswordFailure = (error) => {
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
}

const signOutFailure = (error) => {
  console.log(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Signout failed.')
}
const createCarSuccess = (data) => {
  console.log(data)
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('your car is now added on the list')
}

const createCarFailure = (error) => {
  console.log(error)
}
const getAllCarsSuccess = (data) => {
  console.log(data)
  const showcarsHtml = showCarsTemplate({ cars: data.cars })
  $('#alcr').append(showcarsHtml)
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('list of cars')
}

const getAllCarsFailure = (error) => {
  console.log(error)
}
const onUpdateCarSuccess = (data) => {
  $('#updatemsg').text('repair updated.')

  console.log(data)
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('your repair has been changed')
}

const onUpdateCarFailure = (error) => {
  console.error(error)
}

const removeCarSuccess = (data) => {
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#change-password').hide()
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('car has been removed from list')
  // api.getAllCars()

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
  ChangepasswordSuccess,
  ChangepasswordFailure,
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
