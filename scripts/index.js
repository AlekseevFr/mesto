const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popupProfile_type_edit-card');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popupProfile__input_type_name');
const inputJob = document.querySelector('.popupProfile__input_type_about');
const formSave = document.querySelector('.popupProfile__form');
const closeButton = document.querySelector('.popupProfile__close-button_type_card');
const elements = document.querySelector('.elements');
const addButton = document.querySelector('.add-button');
const addPopup = document.querySelector('.popupProfile_type_add-card');
const closeAddButton = document.querySelector('.popupProfile__close-button_type_add');
const inputAddName = document.querySelector('.popupProfile__input_type_add-name');
const inputLink = document.querySelector('.popupProfile__input_type_link');
const cardName = document.querySelector('.element__title');
const cardImage = document.querySelector('.element__image');
const formCreate = document.querySelector('.popupProfile__form_type_add');
const likeButton = document.querySelector('.element__button');
const imgPopup = document.querySelector('.popupProfile_type_img');
const imgPopupPic = document.querySelector('.popupProfile__img');
const imgPopupTitle = document.querySelector('.popupProfile__title-img');
const closeImgButton = document.querySelector('.popupProfile__close-button_type_img');

function openPopup(el) {
  el.classList.add('popupProfile_opened');
}

function closePopup(el) {
  el.classList.remove('popupProfile_opened');
}

function openPopupProfileEdit() {
  openPopup(popupProfile);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;

}

function saveInfo(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfile);

}
function openPopupAddCard() {
  openPopup(addPopup);
}

function renderCard(el) {
  const elementTemplate = document.querySelector('#element-template').content;
  const listElement = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = listElement.querySelector('.element__image');
  listElement.querySelector('.element__title').textContent = el.name;
  elementImage.src = el.link;
  elementImage.alt = el.name;
  elementImage.addEventListener('click', function () {
    openPopup(imgPopup);
    imgPopupPic.src = el.link;
    imgPopupPic.alt = el.name;
    imgPopupTitle.textContent = el.name;
  });

  listElement.querySelector('.element__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button_active');
  });

  listElement.querySelector('.element__basket-button').addEventListener('click', function (evt) {
    evt.target.closest('.element');
    listElement.remove();
  });
  return listElement;
}

initialCards.forEach(function addCard(el) {
  const listElement = renderCard(el);
  prependCard(listElement);
});
function prependCard(listElement) {
  elements.prepend(listElement);
}

function saveCard(evt) {
  evt.preventDefault();
  const element = {
    name: inputAddName.value,
    link: inputLink.value
  }
  const listElement = renderCard(element);
  prependCard(listElement);
  formCreate.reset();
  closePopup(addPopup);
}

editButton.addEventListener('click', openPopupProfileEdit);
closeButton.addEventListener('click', function () {
  closePopup(popupProfile);
});
formSave.addEventListener('submit', saveInfo);
addButton.addEventListener('click', function () {
  openPopup(addPopup);
});
closeAddButton.addEventListener('click', function () {
  closePopup(addPopup);
});
formCreate.addEventListener('submit', saveCard);
closeImgButton.addEventListener('click', function () {
  closePopup(imgPopup);
});
