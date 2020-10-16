'use strict'
const store = require('./store')

const signUpSuccess =  (response)  => {
  $('#message').text('You have successfully signed up! ' + '\nWELCOME!' + response.user.email)
}

const signUpFailure =  () => {
  $('#message').text('Sign up failed, try again')
}

const signInSuccess =  (response) => {
  $('#message').text('You have been successfully signed in ' + 'Your token is: ' + response.user)
  store.user = response.user
}

const signInFailure =  () => {
  $('#message').text('Sign in failed, please try again')
}

const signOutSuccess =  (response) => {
    $('#message').text('You have been signed out')
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