import React, { Component } from 'react';
import '../TopBar.css';
import TopBar from '../TopBar';


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


    render(){
        return(
            <div class = "fixed-top container-fluid  p-0">
                <TopBar/>
                <div class = "loginScreen">
                    <div class = "loginBox">
                        <img className = "profileImage" alt = "imagemUtilizador" src = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"></img>
                        <h1 className = "loginRegisterFont">{this.state.loggedUser}</h1>
                        <button type="submit" class="btn btn-secondary" onClick = {() => this.logout()}>LogOut</button>
                    </div>
                </div>                                 
            </div>           
        )
    }
}
export default UserPage;