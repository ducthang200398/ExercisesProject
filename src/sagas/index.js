import { all,call, delay, join, put, takeEvery, takeLatest, /*takeLatest */} from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_TODO_LIST } from './../reducers/todo';
import { RENDER_DANGKIVAY } from  './../reducers/todo';
import { API_CALL_REQUEST_FAILD, API_CALL_REQUEST_SUCCESS } from '../constants/task';
import { STATUS_CODE } from '../constants';
import { fetchLoginTaskFaild, fetchListTaskSucces, fetchListUserTaskFaild, fetchListUserTaskSuccess, fetchLoginTaskSuccess,fetchListTaskFaild } from '../actions';
import { hideLoading, showLoading } from '../actions/ui';
import { fetchData } from '../apis/task';
import { toast } from 'react-toastify';

// import { LOGIN } from '../redux/users';

export default function* rootSaga() {
    // const newLocal = "API_USER_CALL_REQUEST";
   // gọi nhiều saga
   yield all([ // gọi nhiều saga
    yield takeLatest("API_CALL_REQUEST", workerSaga),
    yield takeLatest("API_USER_CALL_REQUEST", workerSaga6),
    yield takeLatest("API_ADD_TODO_CALL_REQUEST", workerSaga7),
    watcherSaga2(),
    watcherSaga3(),
    watcherSaga4(),
    watcherSaga5(),
   
]);
}

export function* watcherSaga() {
  console.log("watcherSaga");
    yield takeEvery("API_CALL_REQUEST", workerSaga);
  }
export function* watcherSaga2() {
  console.log("watcheLOGINSaga");
    yield takeEvery("LOGIN", workerSaga2);
  }
  export function* watcherSaga3() {
    console.log("watcherSaga3");
    yield takeEvery("ADD_TO_USER", workerSaga3);
  }
  export function* watcherSaga4() {
    console.log("watcherSaga4");
      yield takeEvery("FETCH_DANGKIVAY", workerSaga4);
    }
    export function* watcherSaga5() {
      console.log("watcherSaga5");
        yield takeEvery("UPDATE", workerSaga5);
      }

function fetchDATA() {
    // return axios({
    //     method: "GET",
    //     url: "http://localhost:5000/exercises/"
    //   });

        let body = '';
        let   url= 'http://localhost:5000/exercises';
        let config = {

          };
        return ()=>axios.get(url,body,config);

  }
  function addData(exercise) {  
      return ()=>axios.post('http://localhost:5000/exercises/add', exercise)

    // let body =JSON.stringify(exercise);
    // let   url= 'http://localhost:5000/exercises/add';
    // let config = {

    //       };
        // return ()=>axios.post(url,body,config);

  }
  function addUSER(user) {
    return ()=>axios.post('http://localhost:5000/users/add', user)
   // return a;
 }
 function Login(user,password) {
  return ()=>axios.get('http://localhost:5000/users/'+ user)
 // return a;
}
 function FETCH_DANGKIVAY(id) {
   console.log("FETCH_DANGKIVAY");
  return ()=>axios.get('http://localhost:5000/exercises/' + id)
 // return a;
}
function UPDATE_ID(id,exercise) {
  console.log("UPDATE");
 return ()=>axios.post('http://localhost:5000/exercises/update/' + id,exercise)
// return a;
}
  
  function* workerSaga() {
    yield put(showLoading());
    console.log("hehehehhe");
    const response = yield call(fetchDATA());
    console.log(response.data);
   
    if(response.status===STATUS_CODE.SUCCESS){
       
        yield put(fetchListTaskSucces(response.data))
      }else{
        yield put(fetchListTaskFaild(response.data))
      }
   
    yield delay(2000); 
    toast.error("thành công")
    yield put(hideLoading());
  }
  function* workerSaga2(action) {
    console.log("thuc hien cai 2");
    console.log(action.password);
    try {
      
      const user =action.username;
    
      const  password=action.password;
      console.log(user);
      const response = yield call(Login(user,password));
      console.log(response.data)
      if(response.status===STATUS_CODE.SUCCESS){
        console.log("heeeeeeeeeee")
        localStorage.setItem("login",JSON.stringify(response.data));
        yield put(fetchLoginTaskSuccess(response.data))
        toast.error("thành công")
        window.location="/";

      }else{
        toast.error("that bai")
        let loi = 'khong thanh cong';
        yield put(fetchLoginTaskFaild(loi))
      }
      console.log("hello");

    } catch (error) {

      yield put({ type: "API_CALL_FAILURE", error });
    }
   
  }

  function* workerSaga3(action) {
    try {
      console.log("thuc hien lan 1");
      const user =action.user;
      const response = yield call(addUSER(user));
      const data = response.data;
      console.log(data)
     
  
      // yield put({ type: "LOGIN", data:[]});
  
      console.log("test"+ data);

      // dispatch a success action to the store with the new dog
      console.log("test");
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: "API_CALL_FAILURE", error });
    }
   
  }
  
  function* workerSaga4(action) {
    console.log("thuc hien cai 4");
    try {
      
      const id =action.id;
      const response = yield call(FETCH_DANGKIVAY(id));
      const data = response.data;
      console.log(data); 
      yield put({ type: FETCH_TASK_EXERCISE_SUCCESS,data});
      console.log("test"+ data);

      // dispatch a success action to the store with the new dog
      console.log("test");
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: "API_CALL_FAILURE", error });
    }
   
  }
  function* workerSaga5(action) {
    console.log("thuc hien cai 5");
    try {
      
      const id =action.id;
      const exercise =action.exercise;
      const response = yield call(UPDATE_ID(id,exercise));
      const data = response.data;
      console.log(data);
      if (data)
      {
        console.log("test"+ data);
      }

      console.log("test");
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: "API_CALL_FAILURE", error });
    }
   
  }

  function fetchUserData(){
      let body = '';
      let   url= 'http://localhost:5000/users';
      let config = {

        };
    return () =>  axios.get(url,body,config);
  }

  function* workerSaga6() {
    console.log("thuc hien cai 6");

      const response = yield call(fetchUserData());
      if(response.status===STATUS_CODE.SUCCESS){
        yield put(fetchListUserTaskSuccess(response.data))
        toast.error("thành công")
      }else{
        yield put(fetchListUserTaskFaild(response.data))
      }
      console.log("test");

  }
  function* workerSaga7(action) {
    console.log("thuc hien cai777777");
    console.log(action.exercise)
      const response = yield call(addData(action.exercise));
    //   const data = response.data;
    //   console.log(data);
      console.log("test");
  }
  