export default class Card {
  constructor(
    item,
    handleCardClick,
    handleDeleteCardClick,
    handleLikeCardClick,
    template,
    currentId
  ) {
    this._id = item._id;
    this._link = item.link;
    this._name = item.name;
    this._likes = item.likes.length;
    this._template = template;
    this._buttonlike = null;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._handleLikeCardClick = handleLikeCardClick;
    this._ownerId = item.owner._id;
    this._currentId = currentId;
    console.log(item, "item");
    this._isLiked = Boolean(
      item.likes.filter((item) => item._id == this._currentId).length
    );
  }
  _deletePic() {
    if (this._ownerId === this._currentId) {
        this._render.querySelector('.element__basket-button').classList.add('element__basket-button_show');
    }
}
  delClickHandler() {
    this._render.remove();
    this._render = null;
  }
  
  isLiked() {
    return this._isLiked;
}

  likeClick(res) {
    this._isLiked = Boolean(res.likes.filter((item) => item._id == this._currentId).length); // проверяем что лайк есть и он мой
    this._render.querySelector('.element__counter').textContent = res.likes.length;
    if (this._isLiked) {
      this._buttonlike.classList.add('element__button_active');
    } else {
      this._buttonlike.classList.remove('element__button_active');
    }
   
  }
  _openPreview() {
    this._handleCardClick({name: this._name, link: this._link});
  }
  _setEventListeners() {
    this._render.querySelector(".element__basket-button").addEventListener("click", () => this._handleDeleteCardClick());
    this._buttonlike.addEventListener("click", () => this._handleLikeCardClick());
    this._cardImage.addEventListener("click", () => this._openPreview());
  }
  createCard() {
    this._render = this._template.cloneNode(true);
    this._render.querySelector(".element__title").textContent = this._name;
    this._deletePic();
    this._likesCount = this._render.querySelector(".element__counter");
    this._likesCount.textContent = this._likes;
    this._cardImage = this._render.querySelector(".element__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._buttonlike = this._render.querySelector(".element__button");
    if (this._isLiked) {
      this._render
        .querySelector(".element__button")
        .classList.add("element__button_active");
    }
    this._setEventListeners();
    return this._render;
  }
}