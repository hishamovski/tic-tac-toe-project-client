'use strict'

const store = require('../store')

const onCreateSuccess = responseData => {
  store.game = responseData.game
  console.log(store.game.cells)
}

const onCreateFailure = responseData => {
  console.log('Failure', responseData)
  $('#message').text('failed to create')
}

const onUpdateSuccess = responseData => {
  console.log('Success' + responseData.game.cells)
}

const onUpdateFailure = responseData => {
  console.log('Failure')
}

const onIndexSuccess = responseData => {
  console.log('Success', responseData)
  $('#message2').text('Total games played: ' + responseData.games.length)
}

const onIndexFailure = responseData => {
  console.log('OnIndex Failure', responseData)
  $('#message2').text('failed to get all games')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onIndexSuccess,
  onIndexFailure
}
