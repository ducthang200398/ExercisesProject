import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {Switch,BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import GlobalLoading from './../../components/GlobalLoading'
import { ToastContainer} from 'react-toastify';
import { Provider } from 'react-redux';

import Navbar from '../../components/navbar.component';

import theme from '../../common/Theme';
import { ROUTESMAIN } from '../../constants';
// import ItemLayoutRoute from '../../common/Layout/ItemLayoutRoute';
import AdminLayoutRoute from '../../common/Layout/AdminLayoutRoute';

import configureStore from '../../redux/configureStore';
const store = configureStore();


const renderRouter=()=>{
    let result =null; 

    result = ROUTESMAIN.map((route,index)=>{
        
        return <AdminLayoutRoute key={index}
        path={route.path} component= {route.component}
        exact={route.exact}
        name={route.name}
        />;
    })
    console.log(result);
    return result;
}
function index()  {
        return (
            <Provider store={store}>          
            <ThemeProvider theme={theme}>




                <BrowserRouter>
                
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
/>
                      <Navbar />
                    <Switch>
                  
                        {renderRouter()}         
                        
                    </Switch>
                    <GlobalLoading />
                </BrowserRouter>


                
                </ThemeProvider>
                </Provider>

       )
}

export default index;