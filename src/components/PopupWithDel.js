import Popup from './Popup.js';

export default class PopupWithDel extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popupProfile__form');
        this.submit = submitCallback;
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.submit();
        });
    }
  }
 