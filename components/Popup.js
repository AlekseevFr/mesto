
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popupProfile_opened');
    document.addEventListener("keydown",  (evt) => this._handleEscClose(evt));
  }
  close() {
    this._popup.classList.remove("popupProfile_opened");
    document.removeEventListener("keydown", (evt) => this._handleEscClose(evt));
  }
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  setEventListeners() {
    console.log("event", this._popup, this._popup.querySelector('.popupProfile__close-button'));
    this._popup.querySelector('.popupProfile__close-button').addEventListener('click', () => this.close());
    this._popup.addEventListener('click', (evt) => this._handleOverlayClose(evt));
  }

  _handleOverlayClose(evt) {
    if (evt.target.className === 'popupProfile__overlay') {
      this.close();
    }
  }
};
