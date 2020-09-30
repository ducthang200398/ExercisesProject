import * as types from  '../constants/task';
const data = JSON.parse(localStorage.getItem('login'));
var initialState=data ? data :null;
console.log(initialState+"DSADADAD")
const taikhoan =(state= initialState,action)=>{
    switch(action.type){
        case types.TAIKHOAN:
           state=action.account;
           localStorage.setItem('login',JSON.stringify(state));
            return state;
        case types.DANGXUAT:
            state=null;
            localStorage.setItem('login',JSON.stringify(state));
            return state;
        default:return state;

    }
}
export default taikhoan;