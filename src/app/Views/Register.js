import React, { Component } from 'react';
import '../TopBar.css';
import TopBar from '../TopBar';


class Register extends Component 
{
    //POST para registar um utilizador no servidor.
    async register(username, email, password) {
        var requestOptions = {
            method: 'POST',
            credentials: 'include',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, password})
        };

        try{
            const response = await fetch ('/api/ConteudosAPI/register', requestOptions);
            const data = await response.json();

            if(response.ok){
                console.log("SUCESSO");
            }
            else{
                console.log("ERRO ", data);
            }
        }
        catch(error){
            console.log('Error:', error);
        }
        window.location.href='/'
    }
    

    render(){
        return(
            <div class = "fixed-top container-fluid  p-0">
                <TopBar/>
                <div class = "loginScreen">
                    <div class = "loginBox">
                        <h1 class = "loginRegisterFont">Register</h1>
                        <div class = "form-group pt-5">
                            <h3 class = "loginRegisterFont">Username</h3>    
                            <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username"></input>                    
                        </div>
                        <div class = "form-group pt-5">
                            <h3 class = "loginRegisterFont">Email address</h3>    
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>                    
                        </div>
                        <div class = "form-group pt-5 pb-5">
                            <h3 class = "loginRegisterFont">Password</h3>    
                            <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter password"></input>                    
                        </div>
                        <button type="submit" class="btn btn-secondary" onClick={() => this.register(document.getElementById('username').value, document.getElementById('email').value, document.getElementById('password').value)} >Register!</button>
                    </div>
                </div>
                    
            </div>
        )
    }
}

export default Register;