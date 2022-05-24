import {imgPopup, imgPopupPic, openPopup, imgPopupTitle} from './index.js';

export class Card {
  constructor(link, name, template) {
    this._link = link;
    this._name = name;
    this._template = template;
  }
  _delClickHandler() {
    this._render.remove();
  }
  _likeClick(event) {
     event.target.classList.toggle("element__button_active");
   }
  _openPreview() {
    imgPopupPic.src = this._link;
    imgPopupPic.alt = this._link;
    imgPopupTitle.textContent = this._name;
    openPopup(imgPopup);
  }
  renderCard() {
    this._render = this._template.cloneNode(true);
    this._render.querySelector(".element__title").textContent = this._name;
    this._render.querySelector(".element__image").src = this._link;
    this._render.querySelector(".element__basket-button").addEventListener("click", () => this._delClickHandler());
    this._render.querySelector(".element__button").addEventListener("click", this._likeClick);
    this._render.querySelector(".element__image").addEventListener("click", () => this._openPreview());
    return this._render;
  }
}
