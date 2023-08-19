import { AxiosError } from "axios";
import { authConstants } from "../constant";
import axios from "../Helpers/axios";

type Usertype = {
     email: string;
     password: string;
};

// Define action types
interface LoginRequestAction {
     type: typeof authConstants.LOGIN_REQUEST;
}

interface LoginSuccessAction {
     type: typeof authConstants.LOGIN_SUCCESS;
     payload: {
          token: string;
     };
}

interface LoginFailureAction {
     type: typeof authConstants.LOGIN_FAILURE;
     payload: {
          error: string;
     };
}

type AuthActionTypes =
     | LoginRequestAction
     | LoginSuccessAction
     | LoginFailureAction;

export function SigninUser(user: Usertype) {
     return async (
          dispatch: (action: AuthActionTypes) => void
     ): Promise<void> => {
          try {
               dispatch({ type: authConstants.LOGIN_REQUEST });

               const res = await axios.post("/auth/signin", {
                    ...user,
               });

               if (res.status === 200) {
                    const { token } = res.data;
                    localStorage.setItem("token", token);

                    dispatch({
                         type: authConstants.LOGIN_SUCCESS,
                         payload: {
                              token,
                         },
                    });
               }
          } catch (error: unknown) {
               if (error instanceof AxiosError) {
                    console.log({ error });
                    dispatch({
                         type: authConstants.LOGIN_FAILURE,
                         payload: {
                              error:
                                   error.response?.data?.message ||
                                   error.response?.data?.error?.message ||
                                   error.response?.data?.error,
                         },
                    });
               } else {
                    console.error("An unknown error occurred:", error);
               }
          }
     };
}