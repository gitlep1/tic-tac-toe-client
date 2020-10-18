'use strict'

const { nodeName } = require('jquery');
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events')

$(() => {
  let currentPlayer = 'X';

  const onBoxClick = (event) => {

    const box = $(event.target)
    box.css('background', 'transparent').text(currentPlayer)

    currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
  }

  $('.box').on('click', onBoxClick)

  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onPasswordChange)
  $('#sign-out').on('click', events.onSignOut)
})
