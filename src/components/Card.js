export default class Card {
  constructor(link, name, likes, handleCardClick, template, buttonlike) {
    this._link = link;
    this._name = name;
   this._likes = likes.length;
    this._template = template;
    this._buttonlike = null;
    this._handleCardClick = handleCardClick;
  }
  delClickHandler() {
    this._render.remove();
    this._template = null;
  }
  _likeClick() {
    this._buttonlike.classList.toggle("element__button_active");
    
  }
  _openPreview() {
    this._handleCardClick({name: this._name, link: this._link});
  }
  _setEventListeners() {
    this._render.querySelector(".element__basket-button").addEventListener("click", () => this._delClickHandler());
    this._buttonlike.addEventListener("click", () => this._likeClick());
    this._cardImage.addEventListener("click", () => this._openPreview());
  }
  createCard() {
    this._render = this._template.cloneNode(true);
    this._render.querySelector(".element__title").textContent = this._name;
    this._likesCount = this._render.querySelector(".element__counter");
    this._likesCount.textContent = this._likes;
    this._cardImage = this._render.querySelector(".element__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name
    this._buttonlike = this._render.querySelector(".element__button");
    this._setEventListeners();
    return this._render;
  }
}
  
