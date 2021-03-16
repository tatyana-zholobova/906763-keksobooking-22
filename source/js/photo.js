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

const removeOnlyOneImage = (container) => {
  container.removeChild(container.firstChild)
}

const createOnlyOneImage = (container, alt) => {
  if (container.hasChildNodes()) {
    removeOnlyOneImage(container);
  }
  const image = document.createElement('img');
  image.style.width = '100%';
  image.style.height = '100%';
  image.style.objectFit = 'cover';
  image.alt = alt;
  housingPhotoContainer.appendChild(image);
  return image;
}

housingPhotoChooser.addEventListener('change', (evt) => {
  const housingPhotoImage = createOnlyOneImage(housingPhotoContainer, HOUSING_PHOTO_ALT)
  checkFileExtension(evt.target, housingPhotoImage)
})

const resetPreviews = () => {
  userPhotoImage.src = USER_PHOTO_EMPTY;
  removeOnlyOneImage(housingPhotoContainer);
}

export { resetPreviews }
