export {
  initialCards,
  popupProfile,
  editButton,
  popupProfileEdit,
  profileName,
  profileJob,
  formSave,
  inputName,
  inputJob,
  closeButton,
  elements,
  addButton,
  addPopup,
  closingAddButton,
  inputAddName,
  inputLink,
  cardName,
  cardImage,
  formCreate,
  formEdit,
  likeButton,
  imgPopup,
  imgPopupPic,
  imgPopupTitle,
  closingImgButton,
  popupOverlay,
  elementTemplate,
  element
};

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
  }, {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  }, {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
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
const imgPopup = document.querySelector(".popupProfile_type_img");
const imgPopupPic = document.querySelector(".popupProfile__img");
const imgPopupTitle = document.querySelector(".popupProfile__title-img");
const closingImgButton = document.querySelector(".popupProfile__close-button_type_img");
const popupOverlay = document.querySelector("popupProfile__overlay");
const elementTemplate = document.querySelector('#element-template').content.querySelector('.element');
const element = document.querySelector(".element");
