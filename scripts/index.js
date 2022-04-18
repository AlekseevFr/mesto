
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_about');
const formSave = document.querySelector('.popup__form');
const closeButton = document.querySelector('.popup__close-button_type_card');
const elements = document.querySelector('.elements');
const addButton = document.querySelector('.add-button');
const addPopup = document.querySelector('.popup_type_add-card');
const closeAddButton = document.querySelector('.popup__close-button_type_add');
const inputAddName = document.querySelector('.popup__input_type_name');
const inputLink = document.querySelector('.popup__input_type_link');
const cardName = document.querySelector('.element__title');
const cardImage = document.querySelector('.element__image');
const formCreate = document.querySelector('.popup__form_type_add');
const likeButton = document.querySelector('.element__button');
const imgPopup = document.querySelector('.popup_type_img');
const imgPopupPic = document.querySelector('.popup__img');
const imgPopupTitle = document.querySelector('.popup__title-img');
const closeImgButton = document.querySelector('.popup__close-button_type_img');

function openPopup(el) {
  el.classList.add('popup_opened');
}

function closePopup(el) {
  el.classList.remove('popup_opened');
}

function inputIn() {
  openPopup(popup);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

function saveInfo(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popup);
}
function inputOut() {
  openPopup(addPopup);
  inputAddName.value = cardName.textContent;
  inputLink.value = cardImage.src;

}

function renderCard(el) {
  const elementTemplate = document.querySelector('#element-template').content;
  const listElement = elementTemplate.querySelector('.element').cloneNode(true);
  listElement.querySelector('.element__title').textContent = el.name;
  listElement.querySelector('.element__image').src = el.link;
  listElement.querySelector('.element__image').alt = el.name;
  listElement.querySelector('.element__image').addEventListener('click', function () {
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

  elements.prepend(listElement);
}
initialCards.forEach(function addCard(el) {
  renderCard(el);
});

function saveCard(evt) {
  evt.preventDefault();
  const element = {
    name: inputAddName.value,
    link: inputLink.value
  }
  renderCard(element);
  closePopup(addPopup);
}

editButton.addEventListener('click', inputIn);
closeButton.addEventListener('click', function () {
  closePopup(popup);
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
