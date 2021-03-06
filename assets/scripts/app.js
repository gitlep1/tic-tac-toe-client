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
const store = require('./store');

$(() => {
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#change-password').on('submit', userEvents.onPasswordChange)
  $('#sign-out').on('submit', userEvents.onSignOut)
  $('#numberOfGames').on('submit', userEvents.onViewGames)
  $('#new-game').on('submit', gameEvents.onNewGame)
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('.container').hide()
  $('h1#gameTitle').hide()
  $('.box').on('click', gameEvents.onGameUpdate)

// TO DO: potantial solution for hover img switch
  // if (store.currentPlayer === 'player2') {
  //   $('box2').on('hover', style.background=url('https://www.artiestick.com/gifs/arg-o-5O-tr.gif'))
  // }

// TO DO: potantial solution for hover img switch
  //   $('.box').on('hover', applyDancer)
  // const applyDancer = event => {
  //     if (currentPlayer === 'x') {
  //         $(event.target).addClass('dancer-x')
  //     } else if (currentPlayer === 'o') {
  //         $(event.target).addClass('dancer-o')
  //     }
  // }
  // css
  // .dancer-x {
  //     background-img: <theurl>;
  // }
  // .dancer-o {
  //     background-img: <theurl>;
  // }
})