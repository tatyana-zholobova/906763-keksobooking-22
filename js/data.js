import { getRandomIntInclusive, getRandomDecimalNumber, getRandomArrayElement, getRandomElementsFromArray } from './util.js';

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
]

const CHEKIN = [
  '12:00',
  '13:00',
  '14:00',
]

const CHEKOUT = [
  '12:00',
  '13:00',
  '14:00',
]

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]

const DESCRIPTION = [
  'отличный вариант для отдыха с детьми',
  'для любителей активного отдыха',
  'для веселой и шумной компании',
  'для романтического отдыха вдвоем',
]

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

const SIMILAR_ADS_COUNT = 10;
const MAX_NUMBER_OF_ROOMS = 20;
const MAX_PRICE = 1000000;
const MAX_NUMBER_OF_GUESTS = 40;
const MIN_LATITUDE = 35.65000;
const MAX_LATITUDE = 35.70000;
const MIN_LONGITUDE = 139.70000;
const MAX_LONGITUDE = 139.80000;
const DIGITS = 5;

const createSimalarAd = () => {
  const latitude = getRandomDecimalNumber(MIN_LATITUDE, MAX_LATITUDE, DIGITS);
  const longitude = getRandomDecimalNumber(MIN_LONGITUDE, MAX_LONGITUDE, DIGITS);
  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntInclusive(1, 8)}.png`,
    },
    offer: {
      title: 'Рассмотрите вариант поблизости',
      address: `${latitude}, ${longitude}`,
      price: getRandomIntInclusive(0, MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomIntInclusive(0, MAX_NUMBER_OF_ROOMS),
      guests: getRandomIntInclusive(0, MAX_NUMBER_OF_GUESTS),
      checkin: getRandomArrayElement(CHEKIN),
      checkout: getRandomArrayElement(CHEKOUT),
      features: getRandomElementsFromArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomElementsFromArray(PHOTOS),
    },
    location: {
      x: latitude,
      y: longitude,
    },
  }
}

const similarAds = new Array(SIMILAR_ADS_COUNT).fill(null).map(createSimalarAd);

export { similarAds, SIMILAR_ADS_COUNT };
