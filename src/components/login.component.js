
import React from 'react';
import { Component } from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
// import { addUser } from '../redux/users';
// import LOGINSUCCESS from './loginsuccess.component'
class Login extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          username: '',
          password:'',
        };
      }

    onChangeUsername(e) {
    this.setState({
        username: e.target.value
    });
    }
    onChangePassword(e) {
      this.setState({
          password: e.target.value
      });
      }
    onSubmit(e) {
    e.preventDefault();
    console.log(this.state.username,this.state.password)
    this.props.getlogin(this.state.username,this.state.password);
    console.log( this.props.getlogin)
    
  }
render(){
  // const login =true;
  // if (login){
  //   return  <LOGINSUCCESS />
  // }
    return (
      
        <div className= "container">
        <h3>Login</h3>
        <form onSubmit={(e)=>this.onSubmit(e)}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                placeholder="Enter your name"
                />
            <label>Password: </label>
            <input  type="password"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                placeholder="Enter your name"
                />
          </div>
            <div>
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>

      </div>
    )
    }
}
const mapStateToProps = (state) => {
  return {
      login: state.login
  }
}
const mapDispatchToProp = (dispatch, props) => {
  return {
    getlogin: (username,password) => dispatch({ type: "LOGIN",username,password})
  }
}
export default connect(mapStateToProps, mapDispatchToProp)(Login);
