import React, { Component } from 'react';
import '../TopBar.css';
import TopBar from '../TopBar';


class PasswordChange extends Component{

  //PUT request para mudar a password de um utilizador
  async passwordChange(username, password)
  {
    const errorResponse = "";
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
        window.location.href='/login' //Redirect para a página de login
      } 
      else {
        errorResponse = await response.json();
        console.error('Failed to update password:', errorResponse);
      }
    } 
    catch (error) {
      console.error('Error occurred while updating password:', error);

      //Limpar os campos de input
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');

      usernameInput.value = '';
      passwordInput.value = '';

      usernameInput.placeholder = "Erro! Tente Novamente";
      passwordInput.placeholder = "Erro! Tente Novamente";
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
                          <input type="email" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username"></input>                    
                      </div>
                      <div class = "form-group pt-5 pb-5">
                          <h3 class = "loginRegisterFont">New password</h3>    
                          <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter new password"></input>                    
                      </div>
                      <button type="submit" class="btn btn-secondary" onClick={() => this.passwordChange(document.getElementById('username').value, document.getElementById('password').value)}>Mudar password</button>
                  </div>
              </div>   
          </div>            
      )
  }
}
export default PasswordChange;