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
         await fetch('https://localhost:7110/api/ConteudosAPI/getuser', requestOptions)
         .then(res => res.json())
         .then(result => this.setState({loggedUser: result.value}))
         .catch(error => console.log('error', error));
         console.log(this.state.loggedUser);
    }

    render(){
        return(
            <div class = "fixed-top container-fluid  p-0">
                <TopBar/>
                <div class = "loginScreen">
                    <div class = "loginBox">
                        <img className = "profileImage" src = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"></img>
                        <span></span>
                        <button type="submit" class="btn btn-secondary">LogOut</button>
                    </div>
                </div>                  
                
            </div>           
        )
    }
}
export default UserPage;