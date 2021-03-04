const adForm = document.querySelector('.ad-form');
const adFormFielsets = adForm.querySelectorAll('.ad-form-header, .ad-form__element');
const filterForm = document.querySelector('.map__filters');
const filterFormFields = filterForm.querySelectorAll('.map__filter, .map__features');
const addressInrut = adForm.querySelector('#address')


const makeDisabled = (element) => {
  element.setAttribute('disabled', '')
}

const makeActive = (element) => {
  element.removeAttribute('disabled')
}

adForm.classList.add('ad-form--disabled');
adFormFielsets.forEach(makeDisabled);

filterForm.classList.add('map__filters--disabled');
filterFormFields.forEach(makeDisabled);

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormFielsets.forEach(makeActive);
  filterForm.classList.remove('map__filters--disabled');
  filterFormFields.forEach(makeActive);
}

export { activateForm, addressInrut }
