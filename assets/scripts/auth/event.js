const getFormFields = require('../../../lib/get-form-fields')
const removebton = require('../templates/car-listing.handlebars')
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
const onUpdateCar = function (event) {
  event.preventDefault()
  console.log('is handler working')
  const data = getFormFields(event.target)
  // const id = event.target.getAttribute('data-id')
  api.updateCarInfo(data)
  .then(ui.onUpdateCarSuccess)
.catch(ui.onUpdateCarfailure)
}

const onRemoveCar = function (event) {
  event.preventDefault()
  console.log(event)
  const id = event.target.getAttribute('removebton.data-id')
  console.log('this is what we need')
  console.log(id)
  api.removeCar(id)

   .then(ui.removeCarSuccess)
   .catch(ui.removeCarFailure)
}
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out-btn').on('click', onSignOut)
  $('#cardtl').on('submit', onCreateCar)
  $('#allcars').on('click', onGetAllCars)
  $('#updtcars').on('click', onUpdateCar)
  $('body').on('click', '.removebtn', onRemoveCar)
  $('#updetail').on('submit', onUpdateCar)
}

module.exports = {
  addHandlers
  // winner
}
