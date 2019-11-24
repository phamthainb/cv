import * as Types from './types';
import { DataService } from '@utils';

import { SubmissionApi, PostApi, SettingApi } from '@constants/ApiConstants';
import * as ConfigConstants from '@constants/ConfigConstants';
export const actLoadSubmission = (props) => {
    return dispatch => {

        if (!localStorage.getItem(ConfigConstants.CURRENT_USER)) {
            return DataService.get(SubmissionApi.GetAll).then(
                rows => dispatch({
                    type: Types.LOAD_SUBMISSION_ALL,
                    rows
                }),
                error => {
                    return error;
                }
            );
        } else {
            return DataService.get(SubmissionApi.GetAllByUser).then(
                rows => dispatch({
                    type: Types.LOAD_SUBMISSION_ALL,
                    rows
                }),
                error => {
                    return error;
                }
            );


        }
    }

}

export const actLoadRankSubmission = (props) => {
    return dispatch => {
        return DataService.get(SubmissionApi.GetAllRank).then(
            rows => dispatch({
                type: Types.LOAD_RANKSUBMISSION_ALL,
                rows
            }),
            error => {
                return error;
            }
        );
    }
}

export const actLoadNewSubmission = (props) => {
    return dispatch => {
        return DataService.get(PostApi.GetAll).then(
            rows => dispatch({
                type: Types.LOAD_POST_ALL,
                rows
            }),
            error => {
                return error;
            }
        );
    }
}

export const actSharedSuccess = (id) => {
    return dispatch => {
        return DataService.post(SubmissionApi.ShareByUser, id).then(
            row => dispatch({
                type: Types.SHARED_SUBMISSION_USER,
                row
            }),
            error => {
                return error;
            }
        );
    }
}

export const actVotedSuccess = (id) => {
    var hours = 24; // Reset when storage is more than 24hours
    var now = new Date().getTime();
    var setupTime = localStorage.getItem('setupTime');
    if ((now - setupTime > hours * 60 * 60 * 1000) || !setupTime) {
        localStorage.removeItem('CURRENT_USER');
        localStorage.removeItem('setupTime');
        return {
            type: Types.NOT_LOGIN,
            id
        }
    } else {
        return dispatch => {
            return DataService.post(SubmissionApi.VoteByUser, id).then(
                row => dispatch({
                    type: Types.VOTED_SUBMISSION_USER,
                    row
                }),
                error => {
                    return error;
                }
            );
        }
    }
}

export const actSetVotedByUser = (message) => {
    return {
        type: Types.SET_VOTE_BY_USER,
        message
    }
}

export const actSetSharedByUser = (message) => {
    return {
        type: Types.SET_SHARED_BY_USER,
        message
    }
}

export const actConnectHub = () => {
    return {
        type: Types.CONNECT_HUB
    }
}

export const actShowRule = () => {
    return {
        type: Types.SHOW_RULE
    }
}

export const actShowLoginFb = () => {
    return {
        type: Types.NOT_LOGIN
    }
}

export const actSetNotLogin = () => {
    return {
        type: Types.SET_NOT_LOGIN
    }
}

export const actGetSetting = () => {
    return dispatch => {
        return DataService.get(SettingApi.FeGetAll).then(
            rows => dispatch({
                type: Types.LOAD_SETTING_ALL,
                rows
            }),
            error => {
                return error;
            }
        );
    }
}

