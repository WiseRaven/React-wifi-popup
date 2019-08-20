export const SET_LANGUAGE_TEXT = 'SET_LANGUAGE_TEXT'
export const SET_LANGUAGE_IMG = 'SET_LANGUAGE_IMG'
export const SET_APP_INIT_OPTIONS = 'SET_APP_INIT_OPTIONS'

export function setAppInitOptions(options) {
    return {
        type: SET_APP_INIT_OPTIONS,
        payload: options
    }
}

export function setLanguageText(langText) {
    return {
        type: SET_LANGUAGE_TEXT,
        payload: langText
    }
}

export function setLanguageImg(langImg) {
    return {
        type: SET_LANGUAGE_IMG,
        payload: langImg
    }
}
