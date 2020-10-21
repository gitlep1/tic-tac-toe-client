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

const gameUpdate = (index, player) => {
  return $.ajax({
    method: "PATCH",
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: 
      {
        "game": {
          "cell": {
            "index": 0,
            "value": "x"
          },
          "over": false
        }
      }
  })
}

module.exports = {
  newGame,
  gameUpdate
}