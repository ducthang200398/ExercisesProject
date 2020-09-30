import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
// import axios from 'axios';


class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    // this.onChangeMoney = this.onChangeMoney.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      // deadline: 0,
      duration: 0,
      date: new Date(),
    }
  }

  componentDidMount() {
    this.props.fetchDangKiVay(this.props.match.params.id);
    setTimeout(() => {
      this.setState({
        username: this.props.edit.username || "",
        description: this.props.edit.description || "",
        duration: this.props.edit.duration || 0,
        date: new Date(this.props.edit.date)|| new  Date()
      });
      
    }, 500);

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
    this.props.update_id(this.props.match.params.id,exercise);

    
    window.location = '/';
  }

  render() {
  
    // const date= this.props.todo.date; 
    return (

      <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={this.onSubmit}>

          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                readOnly={true}
                />
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
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
            <DatePicker
              selected= {new Date()}
              onChange={this.onChangeDate}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
          </div>
        </form>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state.taikhoan)
  return {
      edit: state.exercise
  }
}
const mapDispatchToProp = (dispatch, props) => {
  return {
    fetchDangKiVay:(id)=>dispatch({type:"FETCH_DANGKIVAY",id})
  }
}
export default connect(null, mapDispatchToProp)(EditExercise);