import { SET_ERROR_TYPE } from '../../actions/ErrorType';

const initialState = {
    errorType: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case '@@redux/INIT':
            return state;
        case SET_ERROR_TYPE:
            return {
                ...state,
                errorType: action.payload
            };
        default:
            return state;
    }
};
