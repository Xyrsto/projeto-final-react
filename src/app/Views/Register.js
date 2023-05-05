import React, { Component } from 'react';
import './TopBar.css';
import TopBar from '../TopBar';


class Register extends Component 
{
    render(){
        return(
            <div class = "fixed-top container-fluid  p-0">
                <TopBar/>
                <div class = "loginScreen">
                    <h1 class = "hotMovies">Register</h1>
                    <div class = "form-group pt-5">
                        <h3 class = "hotMovies">Username</h3>    
                        <input type="text" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter username"></input>                    
                    </div>
                    <div class = "form-group pt-5">
                        <h3 class = "hotMovies">Email address</h3>    
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>                    
                    </div>
                    <div class = "form-group pt-5 pb-5">
                        <h3 class = "hotMovies">Password</h3>    
                        <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter password"></input>                    
                    </div>
                    <button type="submit" class="btn btn-secondary">Register!</button>
                </div>
            </div>
        )
    }
}

export default Register;