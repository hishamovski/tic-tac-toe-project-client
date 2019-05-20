'use strict'

const store = require('../store')

const onCreateSuccess = responseData => {
  store.game = responseData.game
}

const onCreateFailure = responseData => {
  $('#feedback').show()
  $('#feedback').text('Log-In to play')
  $('#feedback').removeClass()
  $('#feedback').addClass('failure')
  setTimeout(function () {
    $('#feedback').hide()
  }, 4000)
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
