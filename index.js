let editButton = document.querySelector('.profile-info__edit-button');
let Popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile-info__title');
let profileJob = document.querySelector('.profile-info__subtitle');
let inputName = document.querySelector('.popup__name');
let inputJob = document.querySelector('.popup__about');

function openPopup() {
  Popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}
editButton.addEventListener('click', openPopup);

let closeButton = document.querySelector('.popup__close-button');
function closePopup() {
  Popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closePopup);

let saveButton = document.querySelector('.popup__button');
function saveInfo(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup();
}
Popup.addEventListener('submit', saveInfo);
