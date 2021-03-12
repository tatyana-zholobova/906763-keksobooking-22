/* global L:readonly */

import { activateForm, addressInrut } from './form.js';
import { generateOfferCard } from './popup.js';

const LATITUDE_DEFAUNT = 35.68170;
const LONGITUDE_DEFAUNT = 139.75388;
const ZOOM_DEFAUNT = 10;
const MAIN_PIN_SIZE = 52;
const PIN_SIZE = 40;
const DIGITS = 5;

const map = L.map('map-canvas')
  .on('load', activateForm)
  .setView({
    lat: LATITUDE_DEFAUNT,
    lng: LONGITUDE_DEFAUNT,
  }, ZOOM_DEFAUNT);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [MAIN_PIN_SIZE, MAIN_PIN_SIZE],
  iconAnchor: [MAIN_PIN_SIZE / 2, MAIN_PIN_SIZE],
})

const mainPinMarker = L.marker(
  {
    lat: LATITUDE_DEFAUNT,
    lng: LONGITUDE_DEFAUNT,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const currentCoordinates = evt.target.getLatLng();
  const roundedCoordinates = Object.values(currentCoordinates).map((element) => {
    return Number(element.toFixed(DIGITS));
  });
  addressInrut.value = roundedCoordinates.join(', ');
});

const allPins = []
const renderPins = (data) => {
  data.forEach((element) => {
    const pinIcon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [PIN_SIZE, PIN_SIZE],
      iconAnchor: [PIN_SIZE / 2, PIN_SIZE],
    });

    const marker = L.marker(
      {
        lat: element.location.lat,
        lng: element.location.lng,
      },
      {
        icon: pinIcon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(
        generateOfferCard(element),
        {
          keepInView: true,
        },
      );
    allPins.push(marker);
  })
  return allPins;
}

const resetMap = () => {
  map.setView({
    lat: LATITUDE_DEFAUNT,
    lng: LONGITUDE_DEFAUNT,
  }, ZOOM_DEFAUNT);
  mainPinMarker.setLatLng({
    lat: LATITUDE_DEFAUNT,
    lng: LONGITUDE_DEFAUNT,
  });
}

const clearMap = () => {
  allPins.forEach((element) => {
    element.remove()
  })
  map.closePopup();
}

export { renderPins, resetMap, clearMap }



