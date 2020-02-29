import {AUTHENTICATED, AUTHENTICATION_ERROR, LOGOUT, IS_LOADING} from '../constants/authConst'

const initialState = {
    authenticated:  false,
    authenticationError: false,
    isLoading: false,
    logout: false,
};

export function authenticated(state = initialState, action: any) {
    switch (action.type) {
        case AUTHENTICATED:
            return action.authenticated;

        default:
            return state;
    }
}

export function authenticationError(state = initialState, action: any) {
    switch (action.type) {
        case AUTHENTICATION_ERROR:
            return action.authenticationError;

        default:
            return state;
    }
}

export function isLoading(state = initialState, action: any) {
    switch (action.type) {
        case IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function logout(state = initialState, action: any) {
    switch (action.type) {
        case LOGOUT:
            return action.logout;

        default:
            return state;
    }
}