
import { API_CALL_REQUEST_SUCCESS, FETCH_ADD_TODO_SUCCESS } from "../constants/task";

const ADD_TO_TODO = 'ADD_TO_TODO';
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
// const RENDER_TODO_LIST = 'RENDER_TODO_LIST';
export const RENDER_DANGKIVAY = 'RENDER_DANGKIVAY'; 
const initStateUsers = {
  todos: [],
};

const todo = (state = initStateUsers, action) => {
  switch(action.type) {

    case API_CALL_REQUEST_SUCCESS:
        console.log(action.payload.data);
      return {
        ...state,
        todos:action.payload.data}
    case FETCH_ADD_TODO_SUCCESS:
        return  {
            ...state,
            todos:[...state.todo.todos,action.payload.data]}
    
    case RENDER_DANGKIVAY:
      return  {
        ...state,
        todo:action.data}
    // case DELETE_ID:
    //     return {
    //       ...state}
    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
export const addToDo = (TODO) => {
  return {
    type: ADD_TO_TODO,
    TODO
  }
}


export  default todo;
