import React, { Component } from 'react';
import '../TopBar.css';
import TopBar from '../TopBar';
import {Link} from 'react-router-dom';
//página pessoal para cada utilizador.
class UserPage extends Component{
    state = { loggedUser: ''}

    componentDidMount(){
        this.getUser();
    }

    //GET para ir buscar o utilizador logado ao servidor e atualizar o estado com o utilizador.
    async getUser(){
        var requestOptions = {
            method: 'GET',
            credentials: 'include',
            header:{
                'Access-Control-Allow-Origin':'*'
            }
          };

         // Make the fetch request
         await fetch('/api/ConteudosAPI/getuser', requestOptions)
         .then(res => res.json())
         .then(result => this.setState({loggedUser: result.value}))
         .catch(error => console.log('error', error));
         console.log(this.state.loggedUser);
    }

    // GET para fazer logout do servidor
    async logout() 
    {
        const requestOptions = {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await fetch('/api/ConteudosAPI/logout', requestOptions);

            if (response.ok) {
                console.log('Logout successful');
                // Perform any additional actions after successful logout
            } else {
                console.log('Logout failed');
                // Handle logout failure, display error message, etc.
            }
        } catch (error) {
            console.log('Error:', error);
        }
        window.location.href = '/';
    }

    trimUsername(email) {
        const atIndex = email.indexOf('@');
        
        // verifica se existe @
        if (atIndex !== -1) 
        {
          const username = email.substring(0, atIndex);
          return username;
        } 
        else 
        {
          // se não existe, então assume que o email é o username
          return email;
        }
    }

    render(){
        if(this.trimUsername(this.state.loggedUser) !== "admin"){
            return(
                <div class = "fixed-top container-fluid  p-0">
                    <TopBar/>
                    <div class = "loginScreen">
                        <div class = "loginBox">
                            <img className = "profileImage" alt = "imagemUtilizador" src = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"></img>
                            <h1 className = "loginRegisterFont">{this.trimUsername(this.state.loggedUser)}</h1>
                            <button type="submit" class="btn btn-secondary" onClick = {() => this.logout()}>LogOut</button>
                        </div>
                    </div>                                 
                </div>           
            )
        }
        else{
            return(
                <div class = "fixed-top container-fluid  p-0">
                    <TopBar/>
                    <div class = "loginScreen">
                        <div class = "loginBox">
                            <img className = "profileImage" alt = "imagemUtilizador" src = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"></img>
                            <h1 className = "loginRegisterFont">{this.trimUsername(this.state.loggedUser)}</h1>
                            <div>
                                <Link to = "/CreateContent"><button type="submit" class="btn btn-secondary">Adicionar Conteúdo</button></Link>
                            </div>                            
                            <button type="submit" class="btn btn-secondary" onClick = {() => this.logout()}>LogOut</button>
                        </div>
                    </div>                                 
                </div>           
            )
        }       
    }
}
export default UserPage;