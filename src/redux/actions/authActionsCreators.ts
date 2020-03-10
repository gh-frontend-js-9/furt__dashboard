import {AUTHENTICATED, AUTHENTICATION_ERROR, LOGOUT, IS_LOADING} from '../reducers/authReducers'

export function logoutAction(bool) {
    localStorage.removeItem('token');
    return {
        type: LOGOUT,
        logout: bool
    };
}

export function authenticatedAction(bool) {
    return {
        type: AUTHENTICATED,
        authenticated: bool
    };
}

export function authenticationErrorAction(bool) {
    return {
        type: AUTHENTICATION_ERROR,
        authenticationError: bool
    };
}

export function isLoadingAction(bool) {
    return {
        type: IS_LOADING,
        isLoading: bool
    };
}