export default class UserInfo {
  constructor({userNameEl, userDescEl, userAvaEl}) {
    this._userNameEl = document.querySelector(userNameEl);
    this._userDescEl = document.querySelector(userDescEl);
    this._userAvatarEl = document.querySelector(userAvaEl);
  }
  getUserInfo() {
    return {name: this._userNameEl.textContent, about: this._userDescEl.textContent};
  }

  setUserInfo(el) {
    this._userNameEl.textContent = el.name;
    this._userDescEl.textContent = el.about;
    this._userAvatarEl.src = el.avatar;
  }
}