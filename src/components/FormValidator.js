
export class FormValidator {
  constructor(validation, formSelector) {
    this._inputSelector = validation.inputSelector;
    this._submitButtonSelector = validation.submitButtonSelector;
    this._inactiveButtonClass = validation.inactiveButtonClass;
    this._inputErrorClass = validation.inputErrorClass;
    this._errorClass = validation.errorClass;
    this._formSelector = formSelector;
    this._inputList = Array.from(formSelector.querySelectorAll(validation.inputSelector));
    this._buttonElement = formSelector.querySelector(validation.submitButtonSelector);
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this.disabledButton();
    } else {
      console.log('this', this._buttonElement, this._formSelector, this._submitButtonSelector);
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };
  disabledButton() {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
  }

 _showError(inputElement) {
    const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideError(inputElement) {
    const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
  };
  
  _setEventListeners() { 
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation () {
    
    this._setEventListeners();
  } 
};