const adForm = document.querySelector('.ad-form');
const adFormFielsets = adForm.querySelectorAll('.ad-form-header, .ad-form__element');
const filterForm = document.querySelector('.map__filters');
const filterFormFields = filterForm.querySelectorAll('.map__filter, .map__features');
const addressInrut = adForm.querySelector('#address');
const priceInput = adForm.querySelector('#price');
const typeOfPlacement = adForm.querySelector('#type');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const minPrice = {
  bungalow: '0',
  flat: '1000',
  house: '5000',
  palace: '10000',
}

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

typeOfPlacement.addEventListener('change', () => {
  priceInput.placeholder = minPrice[typeOfPlacement.value];
  priceInput.min = minPrice[typeOfPlacement.value];
})

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
})

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
})

export { activateForm, addressInrut }
