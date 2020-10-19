'use strict'

const store = require('../store')
const config = require('../config')

const signUp = (data) => {
  return $.ajax({
    method: 'POST',
    data: data,
    url: config.apiUrl + '/sign-up'
  })
}

const signIn = (data) => {
  return $.ajax({
    method: 'POST',
    data: data,
    url: config.apiUrl + '/sign-in'
  })
}

const signOut = data => {
    return $.ajax({
        method: "DELETE",
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
  passwordChange
}