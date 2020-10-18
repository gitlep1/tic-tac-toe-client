'use strict'

const store = require('./store')
const config = require('./config')

const signUp = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = data => {
    return $.ajax({
        method: "PATCH",
        data: data,
        url: config.apiUrl + '/sign-out',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
  }

const passwordChange = data => {
    return $.ajax({
        method: "PATCH",
        data: data,
        url: config.apiUrl + '/change-password',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  passwordChange: passwordChange,
}