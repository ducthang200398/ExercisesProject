import React from 'react';
import { Component } from 'react';
// import axios from 'axios';



import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import { addUser } from '../redux/users';
export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeCMND = this.onChangeCMND.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.state = {
          username: '',
          password:'',
          CMND:'',
          date: new Date(),
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
      onChangeCMND(e) {
        this.setState({
            CMND: e.target.value
        });
        }
      onChangeDate(date) {
        this.setState({
          date: date
        });
      }
    onSubmit(event) {
    event.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      CMND: this.state.CMND,
      date: this.state.date,
    }
      this.props.addUser(newUser);
    // console.log(this.props.addUser(newUser));
    // window.location= "/login"
    // this.props.loadUsers();
    this.setState({
      username: '',
      password:'',
      CMND:'',
      date: new Date(),
    });
  }
  // componentDidMount() {
  //   console.log("dasd");
  //   console.log(this.props.data);
  //   return ()=>this.props.loadUsers();
  // }
render(){
    return (
        <div>
        <h3>Create New User</h3>
        <form onSubmit={(event)=>this.onSubmit(event)}>
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
             
                <label>CMND Number: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.CMND}
                onChange={this.onChangeCMND}
                placeholder="Enter your name"
                />
          </div>
            <div className="form-group">
                  <label>Brithday: </label>
                  <div>
                    <DatePicker
                      selected={this.state.date}
                      onChange={this.onChangeDate}
                    />
                  </div>
                </div>
            <div>
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>

      </div>
    )
    }
}

