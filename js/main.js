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

// Получить случайное целое число
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0 || min === max) {
    throw new Error('Некорректный ввод данных');
  } else if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Получить случайное число с плавающей точкой
const getRandomDecimalNumber = (min, max, digits) => {
  if (min < 0 || max < 0 || min === max || digits < 0) {
    throw new Error('Некорректный ввод данных');
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return (Math.random() * (max - min) + min).toFixed(digits);
}

// Получить случайный элемент массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
};

// Получить массив случайной длины из другого массива
const getRandomElementsFromArray = (array) => array.slice(0, getRandomIntInclusive(0, array.length - 1));

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
      chekin: getRandomArrayElement(CHEKIN),
      chekout: getRandomArrayElement(CHEKOUT),
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
console.log(similarAds);
