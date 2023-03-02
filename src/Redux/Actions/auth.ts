import { authConstants } from "../constant";
import axios from "../Helpers/axios";
type Usertype = {
     email?: string;
     password?: string;
};
export function SigninUser(user: Usertype) {
     return async (dispatch: Function): Promise<any> => {
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
          } catch (error: any) {
               console.log({ error });
               dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: {
                         error:
                              error.response.data?.message ||
                              error.response.data.error?.message ||
                              error.response.data?.error,
                    },
               });
          }
     };
}
