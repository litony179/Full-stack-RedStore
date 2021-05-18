import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SIGNOUT, USER_SIGNIN_SUCCESS } from "../../constants/SignInCardPage/userConstants";

export const userSignInReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loader: true };
        case USER_SIGNIN_SUCCESS:
            return { loader: false, userInfo: action.payload };
        case USER_SIGNIN_FAIL:
            return { loader: false, error: action.payload };
        case USER_SIGNIN_SIGNOUT:
            return {};
        default:
            return state;
    }
}