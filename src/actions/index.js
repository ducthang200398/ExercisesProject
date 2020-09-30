
import * as types from './../constants/task';


export const fetchListTask = () => {
    console.log("fetchListTask");
    return {
        type: types.DANHSACH,
    }
}


export const fetchListTaskSucces = data => {
    console.log("fetchListTaskSucces");
    return {
        type: types.API_CALL_REQUEST_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchListTaskFaild = error => {
    console.log("fetchListTaskFaild");
    return {

        type: types.API_CALL_REQUEST_FAILD,
        payload: {
            error
        }
    }
}
export const fetchListUserTaskSuccess = data =>{
    console.log("fetchListUserTaskSuccess");
    return {
        type: types.FETCH_TASK_USER_SUCCESS,
        payload: {
            data
        }
    }
};
export const fetchListUserTaskFaild = error =>{
    console.log("fetchListTaskFaild");
    return {
        type: types.FETCH_TASK_USER_FAILD,
        payload: {
            error
        }
    }
};

export const fetchLoginTaskSuccess = data =>{
    return {
        type: types.FETCH_TASK_LOGIN_SUCCESS,
        payload: {
            data
        }
    }
};
export const fetchLoginTaskFaild = error =>{
    console.log("fetchListTaskFaild");
    return {
        type: types.FETCH_TASK_LOGIN_FAILD,
        payload: {
            error
        }
    }
};
export const fetchexerciseTaskSuccess = data =>{
    console.log("fetchListTaskFaild");
    return {
        type: types.FETCH_TASK_EXERCISE_SUCCESS,
        payload: {
            data
        }
    }
};


