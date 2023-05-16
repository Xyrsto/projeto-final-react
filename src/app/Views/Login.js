import React, { Component } from 'react';
import '../TopBar.css';
import TopBar from '../TopBar';


class Login extends Component 
{
    async login(username,email, password) {
        const requestOptions = {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, password })
          };
        
          try {
            const response = await fetch('https://localhost:7110/api/ConteudosAPI/login', requestOptions);
            const data = await response.json();
        
            if (response.ok) 
            {
              console.log('Login successful');
              // Perform any additional actions after successful login
            } 
            else 
            {
              console.log('Login failed', data);
              // Handle login failure, display error message, etc.
            }
          } 
          catch (error) {
            console.log('Error:', error);
            // Handle network or other errors
          }
        window.location.href='/'
    }
    
    render(){        
        return(
            <div class = "fixed-top container-fluid  p-0">
                <TopBar/>
                <div class = "loginScreen">
                    <div class = "loginBox">
                        <h1 class = "loginRegisterFont">Login</h1>
                        <div class = "form-group pt-5">
                            <h3 class = "loginRegisterFont">Email address</h3>    
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>                    
                        </div>
                        <div class = "form-group pt-5 pb-5">
                            <h3 class = "loginRegisterFont">Password</h3>    
                            <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter password"></input>                    
                        </div>
                        <button type="submit" class="btn btn-secondary" onClick={() => this.login("",document.getElementById('email').value, document.getElementById('password').value)}>Login!</button>
                    </div>
                </div>                  
            </div>
        )
    }
}

export default Login;