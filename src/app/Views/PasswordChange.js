import React, { Component } from 'react';
import '../TopBar.css';
import TopBar from '../TopBar';


class PasswordChange extends Component{

    async passwordChange(username, password)
    {
      try {
        const response = await fetch('/api/ConteudosAPI/passwordChange', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
          },
          body: JSON.stringify({ username, password }),
        });
    
        if (response.ok) {
          console.log('Password updated successfully');
        } else {
          const errorResponse = await response.json();
          console.error('Failed to update password:', errorResponse);
        }
      } catch (error) {
        console.error('Error occurred while updating password:', error);
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
                            <h3 class = "loginRegisterFont">New password</h3>    
                            <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter new password"></input>                    
                        </div>
                        <button type="submit" class="btn btn-secondary" onClick={() => this.passwordChange(document.getElementById('email').value, document.getElementById('password').value)}>Mudar password</button>
                    </div>
                </div>   
            </div>            
       )
    }
}
export default PasswordChange;