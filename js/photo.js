const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const USER_PHOTO_EMPTY = 'img/muffin-grey.svg';
const HOUSING_PHOTO_ALT = 'Фотография жилья';

const userPhotoChooser = document.querySelector('.ad-form-header__input');
const userPhotoImage = document.querySelector('.ad-form-header__preview img');
const housingPhotoChooser = document.querySelector('.ad-form__input');
const housingPhotoContainer = document.querySelector('.ad-form__photo');

const checkFileExtension = (input, place) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      place.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
}

userPhotoChooser.addEventListener('change', (evt) => {
  checkFileExtension(evt.target, userPhotoImage)
})

housingPhotoChooser.addEventListener('change', (evt) => {
  if (housingPhotoContainer.hasChildNodes()) {
    housingPhotoContainer.removeChild(housingPhotoContainer.firstChild)
  }
  const housingPhotoImage = document.createElement('img');
  housingPhotoImage.style.width = '100%';
  housingPhotoImage.style.height = '100%';
  housingPhotoImage.style.objectFit = 'cover';
  housingPhotoImage.alt = HOUSING_PHOTO_ALT;
  housingPhotoContainer.appendChild(housingPhotoImage);
  checkFileExtension(evt.target, housingPhotoImage)
})

const resetPreviews = () => {
  userPhotoImage.src = USER_PHOTO_EMPTY;
  housingPhotoContainer.removeChild(housingPhotoContainer.firstChild);
}

export { resetPreviews }
