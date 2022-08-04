import Popup from './Popup.js';

export default class PopupWithDel extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popupProfile__form');
        this._card = null;
        this.submit = submitCallback;
    }

    open(card) {
        this._card = card;
        super.open();
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.submit(this._card);
        });
    }
  }