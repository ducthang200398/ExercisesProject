import React, { Component } from 'react';

import {Route} from 'react-router-dom';

class index extends Component {
    
    render() {  
            const {component:YourComponent,name,...remainProps}= this.props;
        console.log(component);
            return (
            <div className="">
            
                <Route
                {...remainProps}
                render={routerProps =>{
                    console.log("ahah")
                    return (
                       <YourComponent {...routerProps}/>
                    )
                }}
            />
            </div>
        );
    }
}

export default index;