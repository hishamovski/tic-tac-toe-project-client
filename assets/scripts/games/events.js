'use strict'
const ui = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')

const onCreate = event => {
  const formData = '{}'

  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onUpdateGame = formData => {
  api.update(formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

module.exports = {
  onCreate,
  onUpdateGame
}
