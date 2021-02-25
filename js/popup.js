import { similarAds } from './data.js';

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
  for (let element of offer.features) {
    const newFeature = document.createElement('li');
    newFeature.className = `popup__feature popup__feature--${element}`;
    featuresList.appendChild(newFeature);
  }
  cardElement.querySelector('.popup__description').textContent = offer.description;

  const photosList = cardElement.querySelector('.popup__photos');
  photosList.innerHTML = '';
  for (let element of offer.photos) {
    const newPhoto = document.createElement('img');
    newPhoto.className = 'popup__photo';
    newPhoto.src = element;
    newPhoto.width = 45;
    newPhoto.height = 40;
    newPhoto.alt = 'Фотография жилья';
    photosList.appendChild(newPhoto);
  }
  cardElement.querySelector('.popup__avatar').src = author.avatar;
  return cardElement;
}

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(generateOfferCard(similarAds[0]));
