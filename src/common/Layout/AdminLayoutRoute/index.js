import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
class AdminLayoutRoute extends Component {
    render() {
        const {component:YourComponent,name,...remainProps}= this.props;
   
        console.log( this.props);
        return(
            
            <Route
                {...remainProps}
                render={routerProps =>{
                    return (
                        <YourComponent {...routerProps}/>
                    )
                }}
            
            />
        );
    }
}
export default AdminLayoutRoute;