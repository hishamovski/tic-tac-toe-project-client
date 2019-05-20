'use strict'

const gameEvents = require('../games/events.js')

const store = require('../store')
const onSignUpSuccess = responseData => {
  $('#sign-up')[0].reset()
  $('#feedback').show()
  $('#feedback').text('You Sign-up Successfully')
  $('#feedback').removeClass()
  $('#feedback').addClass('success')
  setTimeout(function () {
    $('#feedback').hide()
  }, 3000)
  $('#signup').hide()
}

const onSignUpFailure = responseData => {
  $('#sign-up')[0].reset()
  $('#feedback').show()
  $('#feedback').text('Sign-up Failure')
  $('#feedback').removeClass()
  $('#feedback').addClass('failure')
  setTimeout(function () {
    $('#feedback').hide()
  }, 3000)
}

const onSignInSuccess = responseData => {
  $('#sign-in')[0].reset()
  store.user = responseData.user
  gameEvents.onIndex()
  $('#signin').hide()
  $('#signup').hide()
  $('#profile').show()
  $('#feedback').show()
  $('#feedback').text('You Sign-In Successfully')
  $('#feedback').removeClass()
  $('#feedback').addClass('success')
  setTimeout(function () {
    $('#feedback').hide()
  }, 4000)
}

const onSignInFailure = responseData => {
  $('#feedback').show()
  $('#feedback').text('Sign-In Failure')
  $('#feedback').removeClass()
  $('#feedback').addClass('failure')
  setTimeout(function () {
    $('#feedback').hide()
  }, 3000)
}

const onChangePasswordSuccess = responseData => {
  $('#change-password')[0].reset()
  $('#feedback').show()
  $('#feedback').text('Password change Successfully')
  $('#feedback').removeClass()
  $('#feedback').addClass('success')
  setTimeout(function () {
    $('#feedback').hide()
  }, 5000)
}

const onChangePasswordFailure = responseData => {
  $('#feedback').show()
  $('#feedback').text('Password Change Failure')
  $('#feedback').removeClass()
  $('#feedback').addClass('failure')
  setTimeout(function () {
    $('#feedback').hide()
  }, 5000)
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
