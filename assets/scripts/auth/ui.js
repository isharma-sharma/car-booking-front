const api = require('./api')
const store = require('../store')
const showCarsTemplate = require('../templates/car-listing.handlebars')

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
  $('#cardtl').show()
  // $('#userId').text(store.userId) will be used to show id of the person who has added the car
}

const signInFailure = (error) => {
  console.error(error)
}

const ChangepasswordSuccess = (data) => {
  // console.log(data)
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
  // $('#show-game-panel').hide()$('#change-password').hide()
  console.log('on signOutSuccess')
}

const signOutFailure = (error) => {
  console.log(error)
  // $('#success').hide()
  // $('#error').show()
  // $('#errmsg').text('Failed')
}
const createCarSuccess = (data) => {
  console.log(data)
  // $('#whatevertheidis').append("text")
  // $('#gameId').text('GAME ID:' + store.gameId)
  // store.store.gameArray = []
  // store.over = false
  // $('.Winner').text('')
  // $('#success').show()
  // $('#error').hide()
  // $('#succmsg').text('New game with id -' + store.gameId + ' created successfully.')
  // console.log('updateGameSuccess')
  // $('.box').css('pointer-events', 'auto')
  // store.player = 'x'
}
const createCarFailure = (error) => {
  console.log(error)
}
const getAllCarsSuccess = (data) => {
  console.log(data)
  const showcarsHtml = showCarsTemplate({ cars: data.cars })
  $('#alcr').append(showcarsHtml)
  $('.removebtn').on('click', function () {
    if (window.confirm('Do you really want to hide this car?')) {
      $(this).parent().hide()
    }
  })
}

const getAllCarsFailure = (error) => {
  console.log(error)
  // $('#success').hide()
  // $('#error').show()
  // $('#errmsg').text('Failed - ' + error)
}
const onUpdateCarSuccess = (data) => {
  console.log(data)
}

const onUpdateCarFailure = (error) => {
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
  onUpdateCarFailure
}
