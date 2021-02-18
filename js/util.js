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

export { getRandomIntInclusive, getRandomDecimalNumber, getRandomArrayElement, getRandomElementsFromArray };
