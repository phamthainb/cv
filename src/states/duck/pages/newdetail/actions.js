import * as Types from './types';
import { DataService } from '@utils';

import { SubmissionApi, PostApi } from '@constants/ApiConstants';
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
