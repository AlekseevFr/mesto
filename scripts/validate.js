

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};
const toggleButtonState = (inputList, buttonElement, classes) => {

  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(classes.inactiveButtonClass);

  } else {
    buttonElement.classList.remove(classes.inactiveButtonClass);
  }
};

const showError = (formElement, inputElement, errorMessage, classes) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(classes.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(classes.errorClass);
};

const hideError = (formElement, inputElement, classes) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(classes.inputErrorClass);
  errorElement.classList.remove(classes.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, classes) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, classes);
  }
  else {
    hideError(formElement, inputElement, classes);
  }
};

const setEventListeners = (formElement, classes) => {
  const inputList = Array.from(formElement.querySelectorAll(classes.inputSelector));
  const buttonElement = formElement.querySelector(classes.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, classes);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, classes);
      toggleButtonState(inputList, buttonElement, classes);
    });
  });
};

const enableValidation = (classes) => {
  const formList = Array.from(document.querySelectorAll(classes.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, classes);
  });
}
enableValidation({
  formSelector: '.popupProfile__form',
  inputSelector: '.popupProfile__input',
  submitButtonSelector: '.popupProfile__button',
  inactiveButtonClass: 'popupProfile__button_inactive',
  inputErrorClass: 'popupProfile__input_type_error',
  errorClass: 'popupProfile__input_type_active'
});

const popupProfiles = Array.from(document.querySelectorAll('.popupProfile'));
popupProfiles.forEach((overlay) => {
  overlay.addEventListener('click', (evt) => {
    if (evt.target.className === 'popupProfile__overlay') {
      closePopup(overlay);
    }
  });
});
popupProfiles.forEach((overlay) => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup(overlay);
    }
  });
});