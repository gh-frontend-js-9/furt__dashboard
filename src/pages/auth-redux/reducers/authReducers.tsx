import {AUTHENTICATED, AUTHENTICATION_ERROR, LOGOUT, IS_LOADING} from '../constants/authConsts'

export function authenticated(state = false, action: any) {
    switch (action.type) {
        case AUTHENTICATED:
            return action.authenticated;

        default:
            return state;
    }
}

export function authenticationError(state = false, action: any) {
    switch (action.type) {
        case AUTHENTICATION_ERROR:
            return action.authenticationError;

        default:
            return state;
    }
}

export function isLoading(state = false, action: any) {
    switch (action.type) {
        case IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function logout(state = false, action: any) {
    switch (action.type) {
        case LOGOUT:
            return action.logout;

        default:
            return state;
    }
}