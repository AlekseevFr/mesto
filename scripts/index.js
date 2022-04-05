let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let inputName = document.querySelector('.popup__input_name');
let inputJob = document.querySelector('.popup__input_about');
let formSave = document.querySelector('.popup__form');
let closeButton = document.querySelector('.popup__close-button');

function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}
function closePopup() {
  popup.classList.remove('popup_opened');
}

function saveInfo(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup();
}
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formSave.addEventListener('submit', saveInfo);
