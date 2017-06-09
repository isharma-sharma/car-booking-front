const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(api.getGamesForUser)
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  api.signOut()
    .then(ui.signOutSuccess)
   .catch(ui.signOutFailure)
}
const onCreateCar = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // debugger
  api.createCar(data)
    .then(ui.createCarSuccess)
    .catch(ui.createCarfailure)
}
const onGetAllCars = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  api.getAllCars()
    .then(ui.getAllCarsSuccess)
    .catch(ui.getAllCarsFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out-btn').on('click', onSignOut)
  $('#cardtl').on('submit', onCreateCar)
  $('#allcars').on('click', onGetAllCars)
}

module.exports = {
  addHandlers
  // winner
}
