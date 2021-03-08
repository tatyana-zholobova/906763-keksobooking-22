import { showMessageError } from './message.js'
import { sendData } from './api.js'

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const adForm = document.querySelector('.ad-form');
const adFormFielsets = adForm.querySelectorAll('.ad-form-header, .ad-form__element');
const filterForm = document.querySelector('.map__filters');
const filterFormFields = filterForm.querySelectorAll('.map__filter, .map__features');
const addressInrut = adForm.querySelector('#address');
const priceInput = adForm.querySelector('#price');
const typeOfPlacement = adForm.querySelector('#type');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const adTitle = adForm.querySelector('#title');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const buttonReset = adForm.querySelector('.ad-form__reset');

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

adTitle.addEventListener('input', () => {
  const valueLength = adTitle.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    adTitle.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.')
  } else if (valueLength > MAX_TITLE_LENGTH) {
    adTitle.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
  } else {
    adTitle.setCustomValidity('');
  }
  adTitle.reportValidity();
});


priceInput.addEventListener('invalid', () => {
  if (priceInput.validity.rangeOverflow) {
    priceInput.setCustomValidity('Максимальная цена за ночь' + MAX_PRICE + ' руб.');
  } else if (priceInput.value < 0) {
    priceInput.setCustomValidity('Введите положительное значение');
  } else if (priceInput.validity.rangeUnderflow) {
    priceInput.setCustomValidity('Минимальная цена за ночь ' + priceInput.min + ' руб.');
  } else if (priceInput.validity.valueMissing) {
    priceInput.setCustomValidity('Обязательное поле');
  } else {
    priceInput.setCustomValidity('');
  }
});

const seLectNumderOfGuests = () => {
  if (roomNumber.value === 100) {
    capacity.setCustomValidity('Этот вариант не для гостей');
  } else if (roomNumber.value < capacity.value) {
    capacity.setCustomValidity('Количество гостей не должно превышать количество комнат');
  } else {
    capacity.setCustomValidity('');
  }
}

roomNumber.addEventListener('change', seLectNumderOfGuests);
capacity.addEventListener('change', seLectNumderOfGuests);

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => onSuccess(),
      () => showMessageError(),
      new FormData(evt.target),
    );
  });
};

const resetForm = () => {
  adForm.reset();
}

export { activateForm, addressInrut, setUserFormSubmit, buttonReset, resetForm }
