'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gamesEvents = require('./games/events')
const authEvents = require('./auth/events')
const game = ['', '', '', '', '', '', '', '', '']
let player = 'X'
let counter = 0
let over = false

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $(document).ready(function () {
    disableButtons()
    $('#profile').hide()
  })
  $('#reset').on('click', function (event) {
    createGame()
    $('.btn-lg').text('')
    enableButtons()
    counter = 0
    for (let i = 0; i < game.length; i++) {
      game[i] = ''
    }
    $('#result').text('')
    over = false
  })

  $('.btn-lg').on('click', function (event) {
    if (counter === 0) {
      checkRadio()
    }
    counter += 1

    if (player === 'X') {
      $(event.target).text('X')
      $(event.target).prop('disabled', true)
      const index = Number($(event.target).attr('id'))
      game[index] = 'X'

      if (checkWinner(game, player) === 'X') {
        $('#result').text('Congratulation, X won')
        disableButtons()
        over = true
      }
      let count = 0
      for (let i = 0; i < game.length; i++) {
        if (game[i] === 'X' || game[i] === 'O') {
          count += 1
        }
      }
      if (count === 9 && checkWinner(game, player) !== 'X') {
        $('#result').text('Game is draw')
      }
      gamesEvents.onIndex()
      player = 'O'
      updateGame(index, game[index], over)
    } else {
      $(event.target).text('O')
      $(event.target).prop('disabled', true)
      const index = Number($(event.target).attr('id'))
      game[index] = 'O'
      if (checkWinner(game, player) === 'O') {
        $('#result').text('Congratulation, O won')
        disableButtons()
        over = true
      }
      let count = 0
      for (let i = 0; i < game.length; i++) {
        if (game[i] === 'X' || game[i] === 'O') {
          count += 1
        }
      }
      if (count === 9 && checkWinner(game, player) !== 'O') {
        $('#result').text('Game is draw')
      }
      gamesEvents.onIndex()
      updateGame(index, game[index], over)
      player = 'X'
    }
  })
})
const updateGame = function (index, value, over) {
  const data = {
    'game': {
      'cell': {
        'index': `${index}`,
        'value': `${value}`
      },
      'over': `${over}`
    }
  }
  gamesEvents.onUpdateGame(data)
}
const createGame = function () {
  gamesEvents.onCreate()
}
const checkWinner = function (game, player) {
  if ((game[0] === game[1]) && (game[1] === game[2]) && (player === game[2])) {
    return game[0]
  }
  if ((game[3] === game[4]) && (game[4] === game[5]) && (player === game[5])) {
    return game[3]
  }
  if ((game[6] === game[7]) && (game[7] === game[8]) && (player === game[8])) {
    return game[6]
  }
  if ((game[0] === game[3]) && (game[3] === game[6]) && (player === game[6])) {
    return game[0]
  }
  if ((game[1] === game[4]) && (game[4] === game[7]) && (player === game[7])) {
    return game[4]
  }
  if ((game[2] === game[5]) && (game[5] === game[8]) && (player === game[8])) {
    return game[2]
  }
  if ((game[0] === game[4]) && (game[4] === game[8]) && (player === game[8])) {
    return game[0]
  }
  if ((game[2] === game[4]) && (game[4] === game[6]) && (player === game[6])) {
    return game[2]
  }
  return undefined
}
const checkRadio = function () {
  if ($("input[name='player']:checked").val() === 'X') {
    player = 'X'
  } else {
    player = 'O'
  }
}
const disableButtons = function () {
  $('.btn-lg').prop('disabled', true)
}
const enableButtons = function () {
  $('.btn-lg').prop('disabled', false)
}
