// import axios from 'axios';

import { fetchListUserTaskSuccess } from "../actions";
import { API_USER_CALL_REQUEST, FETCH_TASK_USER_SUCCESS } from "../constants/task";


export const ADD_TO_USER = 'ADD_TO_USER';

export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';



// const ADD_TO_DELETE = 'ADD_TO_DELETE';
const initStateUsers = {
    users: [],
    data: "",
    user:{},
    login:true
};



const user = (state = initStateUsers, action) => {
  switch(action.type) {
    case FETCH_TASK_USER_SUCCESS:
        return {
            ...state,users: action.payload.data
        }
    default:
      return state;
  }
};


export default user;