import React, { Component } from 'react';
import '../TopBar.css';
import TopBar from '../TopBar';


class PasswordChange extends Component{

    async passwordChange(username, password)
    {
        var requestOptions = {
            method: 'PUT',
            credentials: 'include',
            headers:{
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
          };
          try {
            const response = await fetch('/api/ConteudosAPI/passwordChange', requestOptions);
            const data = await response.json();
        
            if (response.ok) 
            {
              console.log('successful');
              window.location.href='/login';
              // Perform any additional actions after successful login
            } 
            else 
            {
              console.log('failed', data);
              document.getElementById('username').value = '';
              document.getElementById('password').value = '';

              document.getElementById('username').placeholder = 'Erro';
              document.getElementById('password').placeholder = 'Erro';
              // Handle login failure, display error message, etc.
            }
          } 
          catch (error) {
            console.log('Error:', error);
            // Handle network or other errors
          }
    }

    render(){
        return(
            <div class = "fixed-top container-fluid  p-0">
                <TopBar/>
                <div class = "loginScreen">
                    <div class = "loginBox">
                        <h1 class = "loginRegisterFont">Mudar password</h1>
                        <div class = "form-group pt-5">
                            <h3 class = "loginRegisterFont">Username</h3>    
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter username"></input>                    
                        </div>
                        <div class = "form-group pt-5 pb-5">
                            <h3 class = "loginRegisterFont">Password</h3>    
                            <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter new password"></input>                    
                        </div>
                        <button type="submit" class="btn btn-secondary" onClick={() => this.passwordChange("",document.getElementById('email').value, document.getElementById('password').value)}>Mudar password</button>
                    </div>
                </div>   
            </div>            
       )
    }
}
export default PasswordChange;