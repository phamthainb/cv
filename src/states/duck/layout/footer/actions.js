import * as Types from './types';
import { DataService } from '@utils';
import { FooterApi } from '@constants/ApiConstants';

export const actLoadFooter = (props) => {
    return dispatch => {
        return DataService.get(FooterApi.FeGetAll).then(
            rows => dispatch({
                type: Types.LOAD_FOOTER_ALL,
                rows
            }),
            error => {
                //  notifyError({ text: MESS_READ_FAIL });
                return error;
            }
        );
    }
   
}

