import './popup.js'
import './form.js'
import './map.js'
import { renderPins } from './map.js'
import { getData } from './api.js'
import { showAlert } from './util.js'
import './message.js'

const ERROR_GETTING_DATA = 'Не удалось получить данные с сервера. Попробуйте позже';

getData(
  (data) => renderPins(data),
  () => {
    showAlert(ERROR_GETTING_DATA)
  })
