import { initialCards } from "./constants.js";
import { elementTemplate } from "./constants.js";
import  Card  from "../components/Card.js";
import { elements } from "./constants.js";

function newCard(elLink, elName, elTemplate) {
  return new Card(elLink, elName, elTemplate).createCard();
}

initialCards.forEach(function addCard(el) {

  const listElement = newCard(el.link, el.name, elementTemplate);
  prependCard(listElement);
});

function prependCard(listElement) {
  elements.prepend(listElement);
}

export {newCard}