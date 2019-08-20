export const SET_ERROR_TYPE = 'SET_ERROR_TYPE'

export function setErrorType(errorType) {
    return {
        type: SET_ERROR_TYPE,
        payload: errorType
    }
}
