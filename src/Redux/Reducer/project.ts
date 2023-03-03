/* eslint-disable import/no-anonymous-default-export */
import { projectConstants } from "../constant";

const initialState = {
     projects: [],
     project: {},
     error: null,
     message: null,
     loading: false,
};

export default (
     state = initialState,
     action: {
          type: any;
          payload: { projects: any; error: null; project: [] };
     }
) => {
     switch (action.type) {
          case projectConstants.GET_PROJECTS_REQUEST:
               state = {
                    ...state,
                    loading: true,
               };
               break;
          case projectConstants.GET_PROJECTS_SUCCESS:
               state = {
                    ...state,
                    projects: action.payload.projects,
                    loading: false,
               };
               break;
          case projectConstants.GET_PROJECTS_FAILURE:
               state = {
                    ...state,
                    error: action.payload.error,
                    loading: false,
               };
               break;
     }

     return state;
};
