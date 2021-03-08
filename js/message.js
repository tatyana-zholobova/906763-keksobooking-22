import { isEscEvent } from './util.js'

const successTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;

const main = document.querySelector('main');
const body = document.querySelector('body');

const cLosePopup = (element) => {
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      element.remove();
    }
  });
  body.addEventListener('click', () => {
    element.remove();
  });
}

const showMessageSuccsess = () => {
  const messageSuccess = successTemplate.cloneNode(true);
  const popupSuccess = messageSuccess.querySelector('.success');
  popupSuccess.style.zIndex = '5000';
  main.appendChild(popupSuccess);

  cLosePopup(popupSuccess);
}

const showMessageError = () => {
  const messageError = errorTemplate.cloneNode(true);
  const popupError = messageError.querySelector('.error');
  const buttonClose = messageError.querySelector('.error__button');

  popupError.style.zIndex = '5000';
  main.appendChild(popupError);
  buttonClose.addEventListener('click', () => {
    popupError.remove();
  });
  cLosePopup(popupError);
}

export { showMessageSuccsess, showMessageError }
