import { SIMILAR_ADS_COUNT } from './data.js'
import { clearMap } from './map.js'

const DEFAUNT_VALUE = 'any';
const MIN_RANGE_PRICE = 10000;
const MAX_RANGE_PRICE = 50000;

const filterForm = document.querySelector('.map__filters');
const typeFilter = filterForm.querySelector('#housing-type');
const priceFilter = filterForm.querySelector('#housing-price');
const roomsFilter = filterForm.querySelector('#housing-rooms');
const guestsFilter = filterForm.querySelector('#housing-guests');
const featuresFilter = filterForm.querySelector('#housing-features');
const filterFormElements = filterForm.querySelectorAll('select, input');

const blockFilterForm = () => {
  filterFormElements.forEach((element) => {
    element.setAttribute('disabled', '');
  })
}

blockFilterForm();

const unlockFilterForm = () => {
  filterFormElements.forEach((element) => {
    element.removeAttribute('disabled');
  })
}

const checkType = (data) => {
  return typeFilter.value === data.offer.type || typeFilter.value === DEFAUNT_VALUE
}

const checkPrice = (data) => {
  switch (priceFilter.value) {
    case 'low':
      return data.offer.price < MIN_RANGE_PRICE;
    case 'middle':
      return data.offer.price >= MIN_RANGE_PRICE && data.offer.price <= MAX_RANGE_PRICE;
    case 'high':
      return data.offer.price > MAX_RANGE_PRICE;
    case 'any':
      return true;
  }
};

const checkRooms = (data) => {
  return +roomsFilter.value === data.offer.rooms || roomsFilter.value === DEFAUNT_VALUE
}

const checkGuests = (data) => {
  return +guestsFilter.value === data.offer.guests || guestsFilter.value === DEFAUNT_VALUE
}

const checkFeatures = (data) => {
  const checkedFeatures = [...featuresFilter.querySelectorAll('input:checked')];
  const featuresList = checkedFeatures.map((item) => item.value);
  return featuresList.every((element) => {
    return data.offer.features.includes(element)
  })
}

const checkAllFilters = (data) => {
  return checkType(data) && checkPrice(data) && checkRooms(data) && checkGuests(data) && checkFeatures(data)
}

const filterAds = (data) => {
  return data.filter(checkAllFilters).slice(0, SIMILAR_ADS_COUNT)
}

const changeFilter = (cb) => {
  filterForm.addEventListener('change', () => {
    clearMap();
    cb();
  });
};

export { filterForm, filterAds, changeFilter, unlockFilterForm }
