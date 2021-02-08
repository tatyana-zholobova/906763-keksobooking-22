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

getRandomIntInclusive();

const getRandomDecimalNumber = (min, max, digits) => {
  if (min < 0 || max < 0 || min === max || digits < 0) {
    throw new Error('Некорректный ввод данных');
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return (Math.random() * (max - min) + min).toFixed(digits);
}
getRandomDecimalNumber();
