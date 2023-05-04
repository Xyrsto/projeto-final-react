import React, { Component } from 'react';
import './TopBar.css';
import TopBar from './TopBar';


class Login extends Component 
{
    render(){
        return(
            <div class = "fixed-top container-fluid  p-0">
                <TopBar/>
                <div class = "row">
                    <div class = "col-12">
                        <h1>Login</h1>	
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;