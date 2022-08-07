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
createnewCard(el) {
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
deleteCard(id) {
  return fetch(`${this.baseUrl}cards/${id}`, {
          method: 'DELETE',
          headers: this.headers,
      })
      .then(this._responseTransform)
}
likeCard(id) {
  return fetch(`${this.baseUrl}cards/likes/${id}`, {
          method: 'PUT',
          headers: this.headers,
      })
      .then(this._responseTransform)
}

unlikeCard(id) {
  return fetch(`${this.baseUrl}cards/likes/${id}`, {
          method: 'DELETE',
          headers: this.headers,
      })
      .then(this._responseTransform)
}
changeAvatar(avatar) {
  return fetch(`${this.baseUrl}users/me/avatar`, {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify ({ avatar: avatar.link}),
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
