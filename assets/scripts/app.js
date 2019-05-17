'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const game = ['', '', '', '', '', '', '', '', '']
let isXClicked = false
let counter = 0

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#reset').on('click', function (event) {
    $('.btn-lg').text('')
    enableButtons()
    counter = 0
    for (let i = 0; i < game.length; i++) {
      game[i] = ''
    }
    $('.result').text('')
  })
  $('.btn-lg').on('click', function (event) {
    if (counter === 0) {
      checkRadio()
    }
    counter += 1

    if (isXClicked) {
      $(event.target).text('X')
      $(event.target).prop('disabled', true)
      const index = Number($(event.target).attr('id'))
      game[index] = 'X'
      isXClicked = false
      if (checkWinner(game) === 'X') {
        $('.result').text('Congratulation, X won')
        disableButtons()
      }
    } else {
      $(event.target).text('O')
      $(event.target).prop('disabled', true)
      const index = Number($(event.target).attr('id'))
      game[index] = 'O'
      isXClicked = true
      if (checkWinner(game) === 'O') {
        $('.result').text('Congratulation, O won')
        disableButtons()
      }
    }
  })
})

const checkWinner = function (game) {
  if ((game[0] === game[1]) && (game[1] === game[2])) {
    return game[0]
  }
  if ((game[3] === game[4]) && (game[4] === game[5])) {
    return game[3]
  }
  if ((game[6] === game[7]) && (game[7] === game[8])) {
    return game[6]
  }
  if ((game[0] === game[3]) && (game[3] === game[6])) {
    return game[0]
  }
  if ((game[1] === game[4]) && (game[4] === game[7])) {
    return game[4]
  }
  if ((game[2] === game[5]) && (game[5] === game[8])) {
    return game[2]
  }
  if ((game[0] === game[4]) && (game[4] === game[8])) {
    return game[0]
  }
  if ((game[2] === game[4]) && (game[4] === game[6])) {
    return game[2]
  }
}

const checkRadio = function () {
  if ($("input[name='player']:checked").val() === 'X') {
    isXClicked = true
  } else {
    isXClicked = false
  }
}
const disableButtons = function () {
  $('.btn-lg').prop('disabled', true)
}
const enableButtons = function () {
  $('.btn-lg').prop('disabled', false)
}
