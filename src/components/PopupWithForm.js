import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, formSubmit }) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector('.popupProfile__form');
  }
  _getInputValues() {
    const inputs = Array.from(this._form.querySelectorAll('.popupProfile__input'));
    const formValues = {};
    inputs.forEach(input => formValues[input.name] = input.value);
    return formValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._formSubmit(this._getInputValues());
    });
}

    close() {
      super.close();
      this._form.reset();
  }
  
}