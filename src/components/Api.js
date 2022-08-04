export default class Api {
  constructor({ baseUrl, headers }) {
      this.baseUrl = baseUrl;
      this.headers = headers;
  }
  getUserInfo() {
    return fetch(`${this.baseUrl}users/me`, {
            headers: this.headers
        })
        .then(this._responseTransform)
}
getInitialCards() {
  return fetch(`${this.baseUrl}cards`, {
          headers: this.headers,
      })
      .then(this._responseTransform)
}
editUser(item) {
  return fetch(`${this.baseUrl}users/me`, {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify({
              name: item.name,
              about: item.about
          })
      })
      .then(this._responseTransform)
}
newCard(el) {
  return fetch(`${this.baseUrl}cards`, {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({
              name: el.name,
              link: el.link,
          })
      })
      .then(this._responseTransform)
}

_responseTransform(res) {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}
}
