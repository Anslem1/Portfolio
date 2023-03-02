/* eslint-disable import/no-anonymous-default-export */
import { authConstants } from "../constant";

const initialState = {
     token: null,
     authenticated: false,
     authenticating: false,
     error: null,
};

export default (
     state = initialState,
     action: { type: string; payload: { token: null; error: null } }
) => {
     switch (action.type) {
          case authConstants.LOGIN_REQUEST:
               state = {
                    ...state,
                    authenticating: true,
                    authenticated: false,
               };
               break;
          case authConstants.LOGIN_SUCCESS:
               state = {
                    ...state,
                    token: action.payload.token,
                    authenticating: false,
                    authenticated: true,
               };
               break;
          case authConstants.LOGIN_FAILURE:
               state = {
                    ...state,
                    error: action.payload.error,
                    authenticating: false,
                    authenticated: false,
               };
               break;
     }
     return state;
};
