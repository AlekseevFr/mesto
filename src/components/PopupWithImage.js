import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupProfileImage = this._popup.querySelector('.popupProfile__img');
    this._popupProfileTitle = this._popup.querySelector('.popupProfile__title-img');
  }
  open(name, link) {
    this._popupProfileTitle.textContent = name;
    this._popupProfileImage.src = link;
    this._popupProfileImage.alt = name;
    super.open();
  }
};
