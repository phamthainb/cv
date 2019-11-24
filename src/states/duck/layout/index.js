import { combineReducers } from 'redux';
import HeaderReducer from './header';
import FooterReducer from './footer';
const layoutReducer = combineReducers({
    HeaderReducer,
    FooterReducer
});


export default layoutReducer;