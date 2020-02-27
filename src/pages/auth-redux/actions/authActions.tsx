import {AUTHENTICATED, AUTHENTICATION_ERROR, LOGOUT, IS_LOADING} from '../constants/authConsts'

export function logout(bool) {
    localStorage.removeItem('token');
    return {
        type: LOGOUT,
        logout:bool
    };
}
export function authenticated(bool) {
    return {
        type: AUTHENTICATED,
        authenticated: bool
    };
}

export function authenticationError(bool) {
    return {
        type: AUTHENTICATION_ERROR,
        authenticationError: bool
    };
}

export function isLoading(bool) {
    return {
        type: IS_LOADING,
        isLoading: bool
    };
}