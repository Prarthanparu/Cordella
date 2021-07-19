class LocalStorage {
    set(key, data) {
        return window.localStorage.setItem(key, data);
    }

    get(key) {
        return window.localStorage.getItem(key);
    }

    remove(key) {
        return window.localStorage.removeItem(key);
    }

    removeAll() {
        return window.localStorage.clear();
    }

    isUserLoggedIn() {
        return !!(this.get(Keys.jwtToken) && this.get(Keys.username));
    }

    clearLoginUserData() {
        this.remove(Keys.jwtToken);
        this.remove(Keys.expTime);
        this.remove(Keys.username);
    }
}

export default new LocalStorage();

export const Keys = {
    jwtToken: 'jwt',
    expTime: 'expT',
    username: 'usnm',
};