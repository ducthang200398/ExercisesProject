import { combineReducers } from "redux";
import todo  from './todo'
import user  from './user'
import uiReducer from './ui';
import taikhoan from './taikhoan';
const appReducers = combineReducers({
    user,todo,uiReducer,taikhoan
});
export default appReducers;