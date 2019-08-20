import { SET_LANGUAGE_TEXT, SET_LANGUAGE_IMG, SET_APP_INIT_OPTIONS } from '../../actions/AppState';

const initialState = {
    langText: null,
    langImg: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case '@@redux/INIT':
            return state;
        case SET_LANGUAGE_TEXT:
            return {
                ...state,
                langText: action.payload,
            };
        case SET_LANGUAGE_IMG:
            return {
                ...state,
                langImg: action.payload,
            };
        case SET_APP_INIT_OPTIONS:
            return {
                ...state,
                initOptions: action.payload
            }
        default:
            return state;
    }
};
