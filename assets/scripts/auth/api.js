'use strict'
const config = require('../config')
const store = require('../store.js')
const ui = require('./ui')
const signUp = function (data) {
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
  .then((response) => {
    store.userToken = response.user.token
    store.userId = response.user.id
    return store
    // store.user.id = response.user.id
  })
  .then(console.log)
}
const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.userId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
  .then(console.log)
}
const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.userId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
  .then(console.log)
}
const createCar = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/cars',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
    .then(console.log)
    .then((response) => {
      store.carId = response.cars.id
      return store
    })
    // .then(console.log (store.carId))
}
const getAllCars = function () {
  return $.ajax({
    url: config.apiOrigin + '/cars',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
  // .then((response) => {
  //   for (let g in response.games) {
  //     store.gamesList.push(response.games[g].id)
  //   }
  // .then(console.log)
  // })
}
// const updateCarInfo = function (data) {
//   console.log('this is the id &data', data)
//   $.ajax({
//     url: config.host + '/cars/' + store.carId,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
const updateCarInfo = function (repair) {
  console.log('inside updateGame repair is ', repair)
  return $.ajax({
    url: config.apiOrigin + '/cars/' + store.carId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data: {
      'car': {
        'id': {
          'repair': repair
        }
      }
    }
    .then(console.log)
  })
}
// const removeCar = function (data) {
//   console.log('data is', data)
//   console.log('store.carId is', store.carId)
//   return $.ajax({
//     url: config.apiOrigin + '/cars/' + data,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.userToken
//     }
//   })
//   .then(ui.onRemoveCarSuccess)
// }
const removeCar = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/cars/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
  .then((response) => { // this will run if the DELETE request is successful
    $("ul[data-id='" + data + "']").remove() // remove the element with jQuery
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createCar,
  getAllCars,
  updateCarInfo,
  removeCar
}
