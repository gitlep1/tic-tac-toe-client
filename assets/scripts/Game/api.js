'use strict'


const store = require('../store')
const config = require('../config')

const newGame = () => {
  return $.ajax({
    method: "POST",
    data: {},
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const gameUpdate = () => {
  return $.ajax({
    method: "UPDATE",
    data: {},
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  gameUpdate
}