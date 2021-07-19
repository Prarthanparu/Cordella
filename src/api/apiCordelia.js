import axios from 'axios';
import { store } from "@/store/store.js";
// import { authentication } from '@/store/authentication.module.js';
import {
    Unauthorized401,
    Unauthorized403,
    InternalServerError,
} from '@/_helpers/mockup-failure';
import LocalStorage, { Keys, } from '@/_helpers/local-storage';

function handleAxiosError(error) {
    switch (error.response.status) {
        case 401:
            store.dispatch('authentication/logout');
            return Unauthorized401;
        case 403:
            store.dispatch('authentication/logout');
            return Unauthorized403;
        case 500:
            return InternalServerError;
    }
}

function addAuthTokenToRequest(headers) {
    const token = LocalStorage.get(Keys.jwtToken);
    if (token) {
        return Object.assign({}, headers || {}, {
            Authorization: `JWT ${token}`,
        });
    }
    return headers || {};
}


class ApiFolgory {
    constructor() {
        this.curryAxios = axios.create({
            baseURL: process.env.VUE_APP_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    get(path, params = {}, headers = {}) {
        return this.curryAxios.get(path, {
            params,
            headers: addAuthTokenToRequest(headers),
        }).catch(handleAxiosError);
    }

    post(path, data = {}, params = {}, headers = {}) {
        return this.curryAxios.post(path, data, {
            params,
            headers: addAuthTokenToRequest(headers),
        }).catch(handleAxiosError);
    }
}

export default new ApiFolgory();