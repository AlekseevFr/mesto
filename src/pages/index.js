import '../pages/index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js'
import {FormValidator} from '../components/FormValidator.js';
import {validationConfig} from '../scripts/Config.js';
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
  imgPopupTitle
} from '../utils/constants.js'
import Api from '../components/Api.js';
import PopupWithDel from '../components/PopupWithDel';

let currentId = null;

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-46/',
  headers: {
    authorization: '7f1373aa-a57c-413b-aaed-e9030b16b59d',
    'Content-Type': 'application/json'
  }
});

function likeSet(card, res) {
  if (card.isLiked()) {
    api.unlikeCard(res._id)
      .then((res) => card.likeClick(res))
      .catch((err) => console.log(err));
  } else {
    api.likeCard(res._id)
      .then((res) => card.likeClick(res))
      .catch((err) => console.log(err));
  }
}

function сardDelete(card) {
  api.deleteCard(card._id).then(() => {
    card.delClickHandler();
    popupDel.close();
  }).catch((err) => {
    console.log(`${err}`);
  });
}

const popupDel = new PopupWithDel('.popupProfile_type_del', сardDelete);
popupDel.setEventListeners();

function handleDeleteCardClick(card) {
  popupDel.open(card);
}

const popupTypeImg = new PopupWithImage(`.popupProfile_type_img`);
popupTypeImg.setEventListeners();

const userType = new UserInfo({userNameEl: '.profile__title', userDescEl: '.profile__subtitle', userAvaEl: ".profile__avatar"});

const popupTypeEdit = new PopupWithForm({
  popupSelector: '.popupProfile_type_edit-card',
  formSubmit: (item) => {
    api.editUser(item).then((res) => {
      userType.setUserInfo(res);
      popupTypeEdit.close();
    }).catch((err) => {
      console.log(`${err}`);
    })
  }
});
popupTypeEdit.setEventListeners();

function createCard(item) {
  const card = new Card(item, handleCardClick, () => handleDeleteCardClick(card), elementTemplate, currentId);
  const elCard = card.createCard();
  return elCard;
}

const defaultCardList = new Section({

  renderer: (item) => {
    const listElement = createCard(item);
    defaultCardList.addItem(listElement);
  }
}, '.elements');

const popupTypeAdd = new PopupWithForm({
  popupSelector: '.popupProfile_type_add-card',
  formSubmit: (item) => {
    api.newCard(item).then((res) => {
      console.log(res);
      const elCard = createCard(res);
      defaultCardList.addItem(elCard);
      popupTypeAdd.close();

    }).catch((err) => {
      console.log(`${err}`);
    })

  }
});
popupTypeAdd.setEventListeners();

function handleCardClick(item) {
  imgPopupPic.src = this._link;
  imgPopupPic.alt = this._link;
  imgPopupTitle.textContent = this._name;
  popupTypeImg.open(item.name, item.link)
}


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

const avatarElement = document.querySelector('.profile__avatar');

Promise.all([api.getInitialCards(), api.getUserInfo()]).then(([cards, res]) => {
  userType.setUserInfo(res);
  avatarElement.src = res.avatar;
  currentId = res._id;


  defaultCardList.renderItems(cards);
}).catch((err) => {
  console.log(`${err}`);
});
