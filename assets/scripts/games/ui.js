'use strict'

const store = require('../store')

const onCreateSuccess = responseData => {
  store.game = responseData.game
}

const onCreateFailure = responseData => {
  $('#message').text('failed to create')
}

const onUpdateSuccess = responseData => {
}

const onUpdateFailure = responseData => {
}

const onIndexSuccess = responseData => {
  $('#message2').text('Total games played: ' + responseData.games.length)
}

const onIndexFailure = responseData => {
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
