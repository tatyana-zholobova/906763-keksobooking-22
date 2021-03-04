const PHOTO_WIDTH = 45;
const PHOTO_HEIGHT = 40;
const PHOTO_ALT = 'Фотография жилья';

const cardTemplate = document.querySelector('#card').content;

const translationRu = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
}

const generateOfferCard = ({ author, offer }) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = translationRu[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.chekin}, выезд до ${offer.chekout}`;

  const featuresList = cardElement.querySelector('.popup__features');
  featuresList.innerHTML = '';

  const renderFeatures = (list, container) => {
    list.forEach((element) => {
      const newElement = document.createElement(container);
      newElement.className = `popup__feature popup__feature--${element}`;
      featuresList.appendChild(newElement);
    })
  }

  renderFeatures(offer.features, 'li');

  cardElement.querySelector('.popup__description').textContent = offer.description;

  const photosList = cardElement.querySelector('.popup__photos');
  photosList.innerHTML = '';

  const renderPhotos = (list, container) => {
    list.forEach((element) => {
      const newElement = document.createElement(container);
      newElement.className = 'popup__photo';
      newElement.src = element;
      newElement.width = PHOTO_WIDTH;
      newElement.height = PHOTO_HEIGHT;
      newElement.alt = PHOTO_ALT;
      photosList.appendChild(newElement);
    })
  }

  renderPhotos(offer.photos, 'img');

  cardElement.querySelector('.popup__avatar').src = author.avatar;
  return cardElement;
}

export { generateOfferCard };

