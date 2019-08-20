export const SET_USER_TYPE = 'SET_USER_TYPE'
export const SET_USER_NAME = 'SET_USER_NAME'
export const SET_USER_ROOM_NUMBER = 'SET_USER_ROOM_NUMBER'
export const SET_USER_PHONE = 'SET_USER_PHONE'
export const SET_USER_CHECK = 'SET_USER_CHECK'

export function setUserType(type) {
    return {
        type: SET_USER_TYPE,
        payload: type
    }
}

export function setUserName(nameText) {
    return {
        type: SET_USER_NAME,
        payload: nameText
    }
}

export function setUserRoomNumber(roomNumberText) { 
    return {
        type: SET_USER_ROOM_NUMBER,
        payload: roomNumberText
    }
}

export function setUserPhone(phoneText) { 
    return {
        type: SET_USER_PHONE,
        payload: phoneText
    }
}

export function setCheck(check) { 
    return {
        type: SET_USER_CHECK,
        payload: check
    }
}
