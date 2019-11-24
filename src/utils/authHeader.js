import * as ConfigConstants from '@constants/ConfigConstants';

export const AuthHeader = () => {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem(ConfigConstants.CURRENT_USER));
    if (user && user.access_token) {
        return { 'Authorization': 'Bearer ' + user.access_token };
    } else {
        return {};
    }
};