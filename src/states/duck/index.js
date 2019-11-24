import { combineReducers } from 'redux';
import layoutReducer from './layout';
import pagesReducer from './pages'
import commonReducer from './common'
import { reducer as FormReducer } from 'redux-form';
const appReducer = combineReducers({
    layoutReducer,
    pagesReducer,
    commonReducer,
    form: FormReducer,
});
export default appReducer;