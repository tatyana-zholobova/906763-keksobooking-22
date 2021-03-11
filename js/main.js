import './popup.js'
import './map.js'
import { renderPins, resetMap } from './map.js'
import { getData } from './api.js'
import { showAlert, resetForm } from './util.js'
import { showMessageSuccsess } from './message.js'
import { setUserFormSubmit, buttonReset, adForm } from './form.js'
import { filterForm, filterAds, changeFilter, unlockFilterForm } from './filter.js'

const ERROR_GETTING_DATA = 'Не удалось получить данные с сервера. Попробуйте позже';

const loadingDataHandler = (data) => {
  renderPins(data);
  unlockFilterForm();
  changeFilter(() => {
    renderPins(filterAds(data))
  })
}

getData(
  loadingDataHandler,
  () => {
    showAlert(ERROR_GETTING_DATA)
  })

const resetData = () => {
  resetForm(adForm);
  resetForm(filterForm);
  resetMap();
}

buttonReset.addEventListener('click', resetData);
setUserFormSubmit(showMessageSuccsess);
setUserFormSubmit(resetData);
