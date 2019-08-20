import { SET_USER_TYPE, SET_USER_NAME, SET_USER_ROOM_NUMBER, SET_USER_PHONE, SET_USER_CHECK } from '../../actions/UserInformation';
import { TYPE_USER_RESIDENT } from '../../const';

const initialState = {
    name: null,
    roomNumber: null,
    phone: null,
    check: false,
    type: TYPE_USER_RESIDENT
};

export default (state = initialState, action) => {
    switch (action.type) {
        case '@@redux/INIT':
            return state;
        case SET_USER_TYPE:
            return {
                ...state,
                type: action.payload
            };
        case SET_USER_NAME:
            return {
                ...state,
                name: action.payload
            };
        case SET_USER_ROOM_NUMBER:
            return {
                ...state,
                roomNumber: action.payload
            };
        case SET_USER_PHONE:
            return {
                ...state,
                phone: action.payload
            };
        case SET_USER_CHECK:
            return {
                ...state,
                check: action.payload
            };
        default:
            return state;
    }
};
