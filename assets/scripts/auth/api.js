'use strict'

// const store = require('../store')
const config = require('../config.js')

const signUp = formData => {
  console.log('from api.signUp')

  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signUp,
  signIn
}
