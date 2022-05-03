const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
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
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, classes) => {
  if (!inputElement.validity.valid) {
    console.log("show");
    showError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      classes
    );
  } else {
    console.log("hide");
    hideError(formElement, inputElement, classes);
  }
};

const setEventListeners = (formElement, classes) => {
  const inputList = Array.from(
    formElement.querySelectorAll(classes.inputSelector)
  );
  const buttonElement = formElement.querySelector(classes.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, classes);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, classes);
      toggleButtonState(inputList, buttonElement, classes);
    });
  });
};

const enableValidation = (classes) => {
  const formList = Array.from(document.querySelectorAll(classes.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, classes);
  });
};

const validationConfig = {
  formSelector: ".popupProfile__form",
  inputSelector: ".popupProfile__input",
  submitButtonSelector: ".popupProfile__button",
  inactiveButtonClass: "popupProfile__button_inactive",
  inputErrorClass: "popupProfile__input_type_error",
  errorClass: "popupProfile__input_type_active",
};

function disabled(el) {
  el.classList.add(validationConfig.inactiveButtonClass);
}

enableValidation(validationConfig);
