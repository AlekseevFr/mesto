import {Card} from './Card.js';
import {initialCards} from "./cards.js";
import {FormValidator} from './FormValidator.js';
import {validationConfig} from './Config.js';
 
const popupProfile = document.querySelector(".popupProfile");
const editButton = document.querySelector(".profile__edit-button");
const popupProfileEdit = document.querySelector(".popupProfile_type_edit-card");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const formSave = document.querySelector(".popupProfile__form");
const inputName = document.querySelector(".popupProfile__input_type_name");
const inputJob = document.querySelector(".popupProfile__input_type_about");
const closeButton = document.querySelector(".popupProfile__close-button_type_card");
const elements = document.querySelector(".elements");
const addButton = document.querySelector(".add-button");
const addPopup = document.querySelector(".popupProfile_type_add-card");
const closingAddButton = document.querySelector(".popupProfile__close-button_type_add");
const inputAddName = document.querySelector(".popupProfile__input_type_add-name");
const inputLink = document.querySelector(".popupProfile__input_type_link");
const cardName = document.querySelector(".element__title");
const cardImage = document.querySelector(".element__image");
const formCreate = document.querySelector(".popupProfile__form_type_add");
const formEdit = document.querySelector(".popupProfile__form_type_edit");
const likeButton = document.querySelector(".element__button");
export const imgPopup = document.querySelector(".popupProfile_type_img");
export const imgPopupPic = document.querySelector(".popupProfile__img");
export const imgPopupTitle = document.querySelector(".popupProfile__title-img");
const closingImgButton = document.querySelector(".popupProfile__close-button_type_img");
const popupOverlay = document.querySelector("popupProfile__overlay");


export function openPopup(el) {
  el.classList.add("popupProfile_opened");
  document.addEventListener("keydown", escapePopup);
}

function closePopup(el) {
  el.classList.remove("popupProfile_opened");
  document.removeEventListener("keydown", escapePopup);
}

function openPopupProfileEdit() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupProfileEdit);
}

function saveInfo(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfileEdit);
}
function openPopupAddCard() {
  openPopup(addPopup);
}

const elementTemplate = document.querySelector('#element-template').content.querySelector('.element');

function newCard(elLink, elName, elTemplate) {
  return new Card(elLink, elName, elTemplate).createCard();
}

initialCards.forEach(function addCard(el) {

  const listElement = newCard(el.link, el.name, elementTemplate);
  prependCard(listElement);
});
function prependCard(listElement) {
  elements.prepend(listElement);
}

function saveCard(evt) {
  evt.preventDefault();
  const listElement = newCard(inputLink.value, inputAddName.value, elementTemplate);
  prependCard(listElement);
  formCreate.reset();
  closePopup(addPopup);
}

editButton.addEventListener("click", openPopupProfileEdit);
closeButton.addEventListener("click", function () {
  closePopup(popupProfileEdit);
});
formSave.addEventListener("submit", saveInfo);
addButton.addEventListener("click", function () {
  openPopup(addPopup);
  const createButton = addPopup.querySelector(".popupProfile__button");
  new FormValidator (validationConfig, formCreate).disabledButton();
});
closingAddButton.addEventListener("click", function () {
  closePopup(addPopup);
});
formCreate.addEventListener("submit", saveCard);
closingImgButton.addEventListener("click", function () {
  closePopup(imgPopup);
});

const popupProfiles = Array.from(document.querySelectorAll(".popupProfile"));
popupProfiles.forEach((overlay) => {
  overlay.addEventListener("click", (evt) => {
    if (evt.target.className === "popupProfile__overlay") {
      closePopup(overlay);
    }
  });
});
function escapePopup(evt) {
  if (evt.key === "Escape") {
    const popupProfileOpened = document.querySelector('.popupProfile_opened');
    closePopup(popupProfileOpened);
  }
}

const EditFormValid = new FormValidator(validationConfig, formEdit);
const AddFormValid = new FormValidator(validationConfig, formCreate);
EditFormValid.enableValidation();
AddFormValid.enableValidation();
