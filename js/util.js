const ALERT_SHOW_TIME = 5000;

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const resetForm = (form) => {
  form.reset()
}

export { getRandomIntInclusive, getRandomDecimalNumber, getRandomArrayElement, getRandomElementsFromArray, showAlert, isEscEvent, resetForm };
