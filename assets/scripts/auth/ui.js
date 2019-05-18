'use strict'

const gameEvents = require('../games/events.js')

const store = require('../store')
const onSignUpSuccess = responseData => {
  console.log('Success', responseData)
  $('#message').text('Signed up successfully!')
  $('#sign-up')[0].reset()
}

const onSignUpFailure = responseData => {
  console.log('Failure', responseData)
  $('#message').text('Sign up failed :((')
  $('#sign-up')[0].reset()
}

const onSignInSuccess = responseData => {
  $('#message').text('You Signed In successfully!')
  $('#sign-in')[0].reset()
  store.user = responseData.user
  console.log('store is', store.user)
  gameEvents.onIndex()
}

const onSignInFailure = responseData => {
  console.log('Failure', responseData)
  $('#message').text('Signed In failed : Please try again')
}

const onChangePasswordSuccess = responseData => {
  console.log('Success', responseData)
  $('#message').text('Change Password successfully!')
  $('#change-password')[0].reset()
}

const onChangePasswordFailure = responseData => {
  console.log('Failure', responseData)
  $('#message').text('Failure')
}

const onSignOutSuccess = () => {
  $('#message').text('SignOut successfully!')
}

const onSignOutFailure = () => {
  $('#message').text('SignOut Failure')
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
