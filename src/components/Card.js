export default class Card {
  constructor(item, handleCardClick, handleDeleteCardClick, template, currentId) {
    this._id = item._id;
    this._link = item.link;
    this._name = item.name;
    this._likes = item.likes.length;
    this._template = template;
    this._buttonlike = null;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._ownerId = item.owner._id;
    this._currentId = currentId;
  }
  _deletePic() {
    if (this._ownerId === this._currentId) {
        this._render.querySelector('.element__basket-button').classList.add('.element__basket-button_show');
    }
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
    this._render.querySelector(".element__basket-button").addEventListener("click", () => this._handleDeleteCardClick());
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