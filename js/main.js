import './popup.js'
import './map.js'
import { renderPins, resetMap } from './map.js'
import { getData } from './api.js'
import { showAlert } from './util.js'
import { showMessageSuccsess } from './message.js'
import { setUserFormSubmit, buttonReset, resetForm } from './form.js'

const ERROR_GETTING_DATA = 'Не удалось получить данные с сервера. Попробуйте позже';

getData(
  (data) => renderPins(data),
  () => {
    showAlert(ERROR_GETTING_DATA)
  })

setUserFormSubmit(showMessageSuccsess)

buttonReset.addEventListener('click', () => {
  resetForm();
  resetMap();
})
