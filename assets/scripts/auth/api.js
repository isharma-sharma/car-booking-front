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
}
const getAllCars = function () {
  return $.ajax({
    url: config.apiOrigin + '/cars',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
}

const updateCarInfo = function (id, data) {
  console.log('inside updateGame repair is ', data)
  return $.ajax({
    url: config.apiOrigin + '/cars/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
    .then((response) => {
      $("ul[data-id='" + data + "']").update(data)
    })
}

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
