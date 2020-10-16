'use strict'

const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onSignUp = (event) => {
  event.preventDefault()
  
  const form = event.target
  const data = getFormFields(form)
  
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}


const onSignOut = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  
  api.SignOut(data)
    .then(ui.SignOutSuccess)
    .catch(ui.SignOutFailure)
}

const onPasswordChange = (event) => {
  event.preventDefault()
  
  const form = event.target
  const data = getFormFields(form)
 
  api.passwordChange(data)
    .then(ui.passwordChangeSuccess)
    .catch(ui.passwordChangeFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onPasswordChange
}