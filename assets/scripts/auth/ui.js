'use strict'

const gameEvents = require('../games/events.js')

const store = require('../store')
const onSignUpSuccess = responseData => {
  $('#sign-up')[0].reset()
}

const onSignUpFailure = responseData => {
  console.log('Failure', responseData)
  $('#sign-up')[0].reset()
}

const onSignInSuccess = responseData => {
  $('#sign-in')[0].reset()
  store.user = responseData.user
  gameEvents.onIndex()
  $('#signin').hide()
  $('#signup').hide()
  $('#profile').show()
}

const onSignInFailure = responseData => {
  console.log('Failure', responseData)
}

const onChangePasswordSuccess = responseData => {
  console.log('Success', responseData)
  $('#change-password')[0].reset()
}

const onChangePasswordFailure = responseData => {
  console.log('Failure', responseData)
}

const onSignOutSuccess = () => {
  $('#profile').hide()
  $('#signin').show()
  $('#signup').show()
}

const onSignOutFailure = () => {
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordFailure,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onSignOutFailure
}
