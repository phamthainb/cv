import { AuthHeader } from '@utils';
import * as ConfigConstants from '@constants/ConfigConstants';
import * as TextConstants from '@constants/TextConstants';
//import { notifyError } from '@basesShared/common';
import jwt from 'jsonwebtoken';
export const DataService = {
    login,
    loginFacebook,
    loginGoogle,
    logout,
    get,
    post,
    put,
    getFile,
    delete: _delete,
    deleteMulti,
    upload
};

function login(username, password, rememberMe) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(ConfigConstants.API_URL + 'account/login', requestOptions)
        .then(handleResponse, handleError)
        .then(result => {
            let data = jwt.decode(result.token);
            data.access_token = result.token;
            if (result && result.token) {
                localStorage.setItem(ConfigConstants.CURRENT_USER, JSON.stringify(data));
            }
            return result;
        });
}
function loginFacebook(accesstoken, userid, email) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accesstoken, userid,email })
    };

    return fetch(ConfigConstants.API_URL + 'account/facebook', requestOptions)
        .then(handleResponse, handleError)
        .then(result => {
            let data = jwt.decode(result.token);
            data.access_token = result.token;
            if (result && result.token) {
                localStorage.setItem(ConfigConstants.CURRENT_USER, JSON.stringify(data));
            }
            return result;
        });
}
function loginGoogle(accesstoken, userid, email) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accesstoken, userid,email })
    };

    return fetch(ConfigConstants.API_URL + 'account/google', requestOptions)
        .then(handleResponse, handleError)
        .then(result => {
            let data = jwt.decode(result.token);
            data.access_token = result.token;
            if (result && result.token) {
                localStorage.setItem(ConfigConstants.CURRENT_USER, JSON.stringify(data));
            }
            return result;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(ConfigConstants.CURRENT_USER);
}

function get(endpoint, data) {
    const requestOptions = {
        method: 'GET',
        headers: AuthHeader(),
        body: JSON.stringify(data)
    };

    return fetch(ConfigConstants.API_URL + endpoint, requestOptions).then(handleResponse, handleError);
}

function getFile(endpoint, data) {
    const requestOptions = {
        method: 'GET',
        headers: AuthHeader(),
        body: JSON.stringify(data)
    };

    return fetch(ConfigConstants.API_URL + endpoint, requestOptions).then(handleResponseFile, handleError);
}

function upload(endpoint, data) {
    const requestOptions = {
        method: 'POST',
        headers: AuthHeader(),
        body: data
    };

    return fetch(ConfigConstants.API_URL + endpoint, requestOptions).then(handleResponse, handleError);
}



function post(endpoint, data) {
    const requestOptions = {
        method: 'POST',
        headers: { ...AuthHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(ConfigConstants.API_URL + endpoint, requestOptions).then(handleResponse, handleError);
}

function put(endpoint, data) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...AuthHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(ConfigConstants.API_URL + endpoint, requestOptions).then(handleResponse, handleError);
}

function _delete(endpoint, data) {
    const requestOptions = {
        method: 'DELETE',
        headers: AuthHeader(),
        body: JSON.stringify(data)
    };
    return fetch(ConfigConstants.API_URL + endpoint, requestOptions)
        .then(handleResponse, handleError);
}

function deleteMulti(endpoint, key, data) {
    var paramStr = '';
    for (let param in data) {
        paramStr += key + "=" + data[param] + '&';
    }
    const requestOptions = {
        method: 'DELETE',
        headers: AuthHeader()
    };
    return fetch(ConfigConstants.API_URL + endpoint + "/?" + paramStr, requestOptions)
        .then(handleResponse, handleError);
}

function handleResponse(response) {
    return new Promise((resolve, reject) => {
        if (response.ok) {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                response.json().then(json => resolve(json));
            } else {
                resolve();
            }
        } else {
            try {
                switch (response.status) {
                    case 400:
                        response.json().then(json => {
                            let errorMsg = {};
                            if (typeof json === 'object') {
                                for (var propertyName in json) {
                                    var property = json[propertyName];
                                    if (propertyName === "error") {
                                     //   notifyError({ text: property })
                                        return reject();
                                    } else {
                                        errorMsg[propertyName] = property[0];
                                    }
                                }
                                return reject(errorMsg)
                            } else {
                                let jsonObj = JSON.parse(json);
                                if (typeof jsonObj === 'object') {
                                    for (var propertyName in jsonObj) {
                                        var property = jsonObj[propertyName];
                                        if (propertyName === "error") {
                                      //      notifyError({ text: property })
                                            return reject();
                                        } else {
                                            errorMsg[propertyName] = property;
                                        }
                                    }
                                    return reject(errorMsg)
                                }
                            }
                        });
                        break;
                    case 401:
                        localStorage.removeItem(ConfigConstants.CURRENT_USER);
                   //     notifyError({ text: TextConstants.LOGIN_AGAIN_MSG })
                        return reject(response);
                    case 403:
                        localStorage.removeItem(ConfigConstants.CURRENT_USER);
                   //     notifyError({ text: TextConstants.FORBIDDEN })
                        return reject(response);
                    case 404:
                        return reject("Không tìm thấy trang bạn yêu cầu");
                    default:
                        return reject(response)
                }

            }
            catch (ex) {

            }
        }
    });
}

function handleResponseFile(response) {
    return new Promise((resolve, reject) => {
        if (response.ok) {

            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                response.json().then(json => resolve(json));
            } else {
                resolve();
            }


        } else {
            try {
                switch (response.status) {
                    case 400:
                        response.json().then(json => {
                            let errorMsg = {};
                            if (typeof json === 'object') {
                                for (var propertyName in json) {
                                    var property = json[propertyName];
                                    errorMsg[propertyName] = property[0];
                                }
                                reject(errorMsg)
                            } else {
                                let jsonObj = JSON.parse(json);
                                if (typeof jsonObj === 'object') {
                                    for (var propertyName in jsonObj) {
                                        var property = jsonObj[propertyName];
                                        errorMsg[propertyName] = property;
                                    }
                                    reject(errorMsg)
                                } else
                                    reject(notifyError({ text: json }))
                            }
                        });
                        break;
                    case 401:
                        localStorage.removeItem(ConfigConstants.CURRENT_USER);
                        notifyError({ text: TextConstants.LOGIN_AGAIN_MSG });
                        break;
                    case 403:
                        localStorage.removeItem(ConfigConstants.CURRENT_USER);
                        notifyError({ text: TextConstants.FORBIDDEN });
                        break;
                    case 404:
                        reject("Không tìm thấy trang bạn yêu cầu");
                        break;
                    default:
                        return reject(response.statusText)
                }

            }
            catch (ex) {

            }
        }
    });
}


function handleError(error) {
    notifyError({ text: error.message })
    return Promise.reject(error && error.message);
}