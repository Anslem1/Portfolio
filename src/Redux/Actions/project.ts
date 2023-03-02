import { projectConstants } from "../constant";
import axios from "../Helpers/axios";

export function getProjects() {
     return async (dispatch: Function) => {
          try {
               dispatch({ type: projectConstants.GET_PROJECTS_REQUEST });
               const res = await axios.get("/project/get");
               if (res.status === 200) {
                    const { projects } = res.data;
               
                    dispatch({
                         type: projectConstants.GET_PROJECTS_SUCCESS,
                         payload: { projects },
                    });
               }
          } catch (error: any) {
               console.log({ error });
               dispatch({
                    type: projectConstants.GET_PROJECTS_FAILURE,
                    payload: {
                         error:
                              error.response.data.error.message ||
                              error.data.response.message,
                    },
               });
          }
     };
}


