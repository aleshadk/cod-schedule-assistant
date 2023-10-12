import { USERS } from "../const";

class UserStorage {
  localStorageKey = "currentUser";

  getUser() {
    const data = localStorage.getItem(this.localStorageKey);
    return data && USERS.some((x) => x === data) ? data : null;
  }

  saveUser(user) {
    if (!USERS.some((x) => user)) {
      return;
    }

    localStorage.setItem(this.localStorageKey, user);
  }

  resetUser() {
    localStorage.removeItem(this.localStorageKey);
  }
}

const userStorage = new UserStorage();
export default userStorage;
