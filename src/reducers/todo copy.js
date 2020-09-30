// import axios from 'axios';

import { fetchListUserTaskSuccess } from "../actions";
import { API_USER_CALL_REQUEST, FETCH_TASK_USER_SUCCESS } from "../constants/task";








const initStateUsers = {
    edit: [],
};

const edit = (state = initStateUsers, action) => {
  switch(action.type) {
    case FETCH_TASK_EXERCISE_SUCCESS:
        return {
            ...state,users: action.payload.data
        }
    default:
      return state;
  }
};


export default edit;