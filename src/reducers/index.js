import { combineReducers } from 'redux';

import AppState from './AppState';
import UserInformation from './UserInformation';
import ErrorType from './ErrorType';

export default combineReducers({
    AppState,
    UserInformation,
    ErrorType,
});
