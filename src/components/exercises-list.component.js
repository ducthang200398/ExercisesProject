import React, { Component } from 'react';
import Exercise from './exercise';
import axios from 'axios';
import { connect } from 'react-redux';


class index extends Component {
  constructor(props) {
    super(props); 
    this.state = {exercises: []};
  }


  componentDidMount() {
    console.log("hehe");
    this.props.fetchData();
    
  }
  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(res => console.log(res.data));
      console.log("delete");
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }
  exerciseList() {
    return this.props.todo.map((currentexercise,index) => {
      return <Exercise exercise={currentexercise} key= {index} />;
    })
  }
  
  render()
   {
    return (
  <div className="container-fluid ">
  <h3>Logged Exercises</h3>
  <table className="table">
    <thead className="thead-light">
      <tr>
        <th>Username</th>
        <th className= "Description">Description</th>
        <th>Duration</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
     {this.exerciseList()}
    </thead>
  </table>
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      todo: state.todo.todos
  }
}
const mapDispatchToProp = (dispatch, props) => {
  return {
    fetchData: () => dispatch({ type: "API_CALL_REQUEST"}),
  }
}
export default connect(mapStateToProps, mapDispatchToProp)(index);
