import * as Types from './types';
import { DataService } from '@utils';
import { HeaderApi } from '@constants/ApiConstants';
import * as ConfigConstants from '@constants/ConfigConstants';

export const SignInFacebook = (props, value) => {
    return dispatch => {
        return DataService.loginFacebook(value.accessToken, value.userID, value.email).then(
            (res) => {
                let userLocal = localStorage.getItem(ConfigConstants.CURRENT_USER);
                if (userLocal) {
                   let now = new Date().getTime();
                   localStorage.setItem('setupTime', now);
                }
                let info = JSON.parse(localStorage.getItem(ConfigConstants.CURRENT_USER));
                dispatch({
                    type: Types.LOGIN,
                    isAuthenticated: true,
                    avatar: info.avatar,
                    id: info.Id,
                    name: info.fullName
                });
                return res;
            },
            (error) => {
                return error;
            }
        )
    }
}

export const GetPermissionByUserId = (props, userId) => {
    return dispatch => {
        return DataService.get(HeaderApi.GetPermissionByUserId.replace('{0}', userId)).then(
            (res) => {
                let localUser = JSON.parse(localStorage.getItem(ConfigConstants.CURRENT_USER));
            //    localUser.permissions = JSON.stringify(res);
                localStorage.setItem(ConfigConstants.CURRENT_USER, JSON.stringify(localUser));
                let now = new Date().getTime();
                localStorage.setItem('setupTime', now);
                dispatch({
                    type: Types.GET_PERMISSSION_SUCCESS,
                    Permissions: res
                });
                // props.history.push('/');
                //  notifySuccess({ text: MESS_LOGIN_SUCCESS });
            },
            (error) => {
                //    notifyError({ text: MESS_READ_FAIL });
                return error;
            }
        )
    }
}

export const SignOut = () => {
    return dispatch => {
        dispatch({
            type: Types.LOGOUT,
            isAuthenticated: false,
        });
       // props.history.push('/login')
    };
}