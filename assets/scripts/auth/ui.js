'use strict'

const store = require('../store')
const onSignUpSuccess = responseData => {
  console.log('Success', responseData)
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onSignUpFailure = responseData => {
  console.log('Failure', responseData)
  $('#message').text('Sign up failed :((')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignInSuccess = responseData => {
  console.log('Success', responseData)
  $('#message').text('You Signed In successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')

  store.user = responseData.user
  console.log('store is', store.user)
}

const onSignInFailure = responseData => {
  console.log('Failure', responseData)
  $('#message').text('Signed In failed : Please try again')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
