import {imgPopup, imgPopupPic, imgPopupTitle} from '../utils/constants.js';


export default class Card {
  constructor(link, name, handleCardClick, template, buttonlike) {
    this._link = link;
    this._name = name;
    this._template = template;
    this._buttonlike = null;
    this._handleCardClick = handleCardClick;
  }
  _delClickHandler() {
    this._render.remove();
    this._template = null;
  }
  _likeClick() {
    this._buttonlike.classList.toggle("element__button_active");
    console.log(this._buttonlike);
    console.log(this._buttonlike.classList);
  }
  _openPreview() {
    imgPopupPic.src = this._link;
    imgPopupPic.alt = this._link;
    imgPopupTitle.textContent = this._name;
    this._handleCardClick({name: this._name, link: this._link});
  }
  createCard() {
    this._render = this._template.cloneNode(true);
    this._render.querySelector(".element__title").textContent = this._name;
    this._render.querySelector(".element__image").src = this._link;
    this._render.querySelector(".element__basket-button").addEventListener("click", () => this._delClickHandler());
    this._buttonlike = this._render.querySelector(".element__button");
    this._buttonlike.addEventListener("click", () => this._likeClick());
    this._render.querySelector(".element__image").addEventListener("click", () => this._openPreview());
    return this._render;
  }

}
