
import React, {Component} from 'react';
import './loginsuccess.component.css';
import checkdoneimg from '../image/check-complete.svg'
class LOGINSUCCESS extends Component{
  render(){
  return (
    <div class ="box" >
        <img src ={checkdoneimg} alt=""  />
        <p>BAN DA DANG NHAP THANH CONG</p>
        <button onClick={()=>{ window.location = '/'}}>Tiep tuc</button>
    </div>
  );
  }
}

export default LOGINSUCCESS;