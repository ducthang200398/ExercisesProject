import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

 class Navbar extends Component {

  render() {  
    const {taikhoan,onDangxuat} = this.props ;
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav ">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
     
          <li className="navbar-item">
          <Link to="/user" className="nav-link">REGISTER</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          {!taikhoan && <li className="navbar-item"><Link to="/login" className="nav-link">Dangnhap</Link></li>}
          {taikhoan && <li className="navbar-item" ><Link to="/login" className="nav-link" onClick={onDangxuat}>LOGOUT</Link></li>}
    {taikhoan && <li className="navbar-item"><Link to="/taikhoan" className="nav-link">{taikhoan.username}</Link></li>}
        </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.taikhoan)
  return {
      taikhoan: state.taikhoan
  }
}
const mapDispatchToProp = (dispatch, props) => {
  return {
    onDangxuat:()=>dispatch({type:"DANGXUAT"})
  }
}
export default connect(mapStateToProps, mapDispatchToProp)(Navbar);