const api = require('./api')
const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
  $('#sign-up').hide()
}
const signUpFailure = (error) => {
  console.error(error)
}
const signInSuccess = (data) => {
  // $('#show-game-panel').show() will add the id of add car form
  $('#sign-in').hide()
  // $('#userId').text(store.userId) will be used to show id of the person who has added the car
}

const signInFailure = (error) => {
  console.error(error)
}

const ChangepasswordSuccess = (data) => {
  console.log(data)
  $('#change-password').hide()
}

const ChangepasswordFailure = (error) => {
  console.error(error)
}
const signOutSuccess = (data) => {
  $('#sign-in').show()
  $('#sign-up').hide()
  // $('#game-board').hide()
  $('#change-password').hide()
  // $('#show-game-panel').hide()
  console.log('on signOutSuccess')
}

const signOutFailure = (error) => {
  console.log(error)
  // $('#success').hide()
  // $('#error').show()
  // $('#errmsg').text('Failed')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  ChangepasswordSuccess,
  ChangepasswordFailure,
  signOutSuccess,
  signOutFailure
}
