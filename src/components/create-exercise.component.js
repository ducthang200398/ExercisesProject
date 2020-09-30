import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './create-exercise.component.css';
import { connect } from 'react-redux';
class index extends Component {

    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          description: '',
          duration: 0,
          date: new Date(),
          users: []
        }
      }
    
      componentDidMount() {
        this.setState({ 
          users: ['test user'],
          username: 'test user'
        });
        console.log("fetchuserdata");
        this.props.fetchUserData();
      
      }
    
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }
    
      onChangeDescription(e) {
        this.setState({
          description: e.target.value
        });
      }
    
      onChangeDuration(e) {
        this.setState({
          duration: e.target.value
        });
      }
    
      onChangeDate(date) {
        this.setState({
          date: date
        });
      }
    
      onSubmit(e) {
        e.preventDefault();
      
        const exercise = {
          username: this.state.username,
          description: this.state.description,
          duration: this.state.duration,
          date: this.state.date,
        };
        
        console.log(exercise);

        // axios.post('http://localhost:5000/exercises/add', exercise)
        // .then(res => console.log(res.data));
        this.props.fetchAddDataToDo(exercise);
        // window.location = '/';
      }
    

      render() {
        console.log(this.props.user);
        let inputStyle = {
          background:"rgba(27, 27, 50, 0.8)"
        };
        return (
          <div style={inputStyle} className="container">
            <h3>Create New Exercise Log</h3>
            <form onSubmit={(event)=>this.onSubmit(event)}>
              <div className="form-group"> 
                <label>Username: </label>
                <select
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername} >
                    {
                      this.props.user.map(function(user,index) {
                        return <option 
                          key={index}
                          value={user.username}>{user.username}
                          </option>;
                      })
                    }
                </select>
              </div>
              <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    placeholder="Enter your description"
                    />
              </div>
              <div className="form-group">
                <label>Duration (in minutes): </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                    />
              </div>
              <div className="form-group">
                <label>Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
    
              <div className="form-group">
                <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
              </div>
            </form>
            
      
          </div>
        )
      }
    }
    const mapStateToProps = (state) => {
      return {
          user: state.user.users
      }
    }
    const mapDispatchToProp = (dispatch) => {
      return {
        fetchUserData: () => dispatch({ type: "API_USER_CALL_REQUEST"}),

        fetchAddDataToDo: (exercise) => dispatch({ type: "API_ADD_TODO_CALL_REQUEST",exercise}),

      }
    }
    export default connect(mapStateToProps, mapDispatchToProp)(index)
