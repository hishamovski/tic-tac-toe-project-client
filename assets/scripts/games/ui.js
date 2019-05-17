'use strict'

const store = require('../store')

const onCreateSuccess = responseData => {
  store.game = responseData.game
  console.log(store.game.cells)
}

const onCreateFailure = responseData => {
  console.log('Failure', responseData)
  $('#message').text('failed to create')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onUpdateSuccess = responseData => {
  console.log('Success' + responseData.game.cells)
}

const onUpdateFailure = responseData => {
  console.log('Failure')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  onUpdateFailure
}
