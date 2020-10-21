'use strict'

const { nodeName } = require('jquery');
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('./User/events')
require('./User/api')
require('./User/ui')
const gameEvents = require('./Game/events')
require('./Game/api')
require('./Game/ui')
const store = require('./store')

$(() => {
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#change-password').on('submit', userEvents.onPasswordChange)
  $('#sign-out').on('submit', userEvents.onSignOut)
  $('#new-game').on('submit', gameEvents.onNewGame)
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('.container').hide()
  $('h1#gameTitle').hide()
  $('.box').on('click', gameEvents.onGameUpdate)
})
