'use strict'
const store = require('../store')

const signUpSuccess =  (response)  => {
  $('#message').text('You have successfully signed up! ' + 'WELCOME! ' + response.user.email)
}

const signUpFailure =  () => {
  $('#message').text('Sign up failed, try again')
}

const signInSuccess =  (response) => {
  $('#message').text('You have been successfully signed in ' + response.user.email)
  store.user = response.user
  $('#change-password').show()
  $('#sign-out').show()
  $('#new-game').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('h1#gameTitle').show()
  $('h1#welcome').hide()
}

const signInFailure =  () => {
  $('#message').text('Sign in failed, please try again')
}

const signOutSuccess =  (response) => {
    $('#message').text('You have successfully signed out')
    $('#change-password').hide()
    $('#sign-out').hide()
    $('#new-game').hide()
    $('#sign-up').show()
    $('#sign-in').show()
    $('.container').hide()
    $('h1#gameTitle').hide()
    $('h1#welcome').show()
    window.location.reload();
}
  
const signOutFailure =  () => {
    $('#message').text('You have failed to sign out, please try again')
}

const passwordChangeSuccess =  (response)  => {
  $('#message').text('Your password has been successfully changed')
}

const passwordChangeFailure =  () => {
  $('#message').text('You have failed to change your password')
}


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  passwordChangeSuccess,
  passwordChangeFailure
}