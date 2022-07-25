import './pages/index.css';
import Card from './components/Card.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js'
import {FormValidator} from './scripts/FormValidator.js';
import {validationConfig} from './scripts/Config.js';
import {
  initialCards,
  formCreate,
  formEdit,
  elementTemplate,
  addButton,
  editButton,
  inputName,
  inputJob,
  imgPopupPic,
  imgPopupTitle,
} from './utils/constants.js'

const popupTypeImg = new PopupWithImage(`.popupProfile_type_img`);
popupTypeImg.setEventListeners();

const popupTypeEdit = new PopupWithForm({
  popupSelector: '.popupProfile_type_edit-card',
  formSubmit: (item) => {
    userType.setUserInfo(item);
    popupTypeEdit.close();
  }
});
popupTypeEdit.setEventListeners();

function createCard(item) {
  const card = new Card(item.link, item.name, handleCardClick, elementTemplate);
  const elCard = card.createCard();
  return elCard;
}

const popupTypeAdd = new PopupWithForm({
  popupSelector: '.popupProfile_type_add-card',
  formSubmit: (item) => {
    const elCard = createCard(item);
    defaultCardList.addItem(elCard);
    popupTypeAdd.close();
  }
});
popupTypeAdd.setEventListeners();

function handleCardClick(item) {
  imgPopupPic.src = this._link;
  imgPopupPic.alt = this._link;
  imgPopupTitle.textContent = this._name;
  popupTypeImg.open(item.name, item.link)
}

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const listElement = createCard(item);
    defaultCardList.addItem(listElement);
  }
}, '.elements');

defaultCardList.renderItems();

const userType = new UserInfo({userNameEl: '.profile__title', userDescEl: '.profile__subtitle'});

function openPopupProfileEdit() {
  const user = userType.getUserInfo();
  inputName.value = user.name;
  inputJob.value = user.about;
  popupTypeEdit.open()
}


editButton.addEventListener("click", openPopupProfileEdit);

const editFormValid = new FormValidator(validationConfig, formEdit);
editFormValid.enableValidation();

const addFormValid = new FormValidator(validationConfig, formCreate);
addFormValid.enableValidation();

addButton.addEventListener("click", function () {
  popupTypeAdd.open();


  addFormValid.disabledButton();
});