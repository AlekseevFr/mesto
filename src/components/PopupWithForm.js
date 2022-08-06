import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, formSubmit}) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector('.popupProfile__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popupProfile__input'));
    this._formValues = {};
    this._submitLoading = this._form.querySelector('.popupProfile__button_type-load');
  }
  _getInputValues() {
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
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
  submitLoading(load) {
      this._submitLoading.textContent = load ? 'Сохранение...' : 'Сохранить';
  }
}
