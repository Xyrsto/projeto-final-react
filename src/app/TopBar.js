import React, { Component } from 'react';
import './TopBar.css';
import {Link} from 'react-router-dom';


//esta classe contém a barra de navegação da aplicação. É chamada em todas as páginas.
class TopBar extends Component
{    
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

         await fetch('/api/ConteudosAPI/getuser', requestOptions)
         .then(res => res.json())
         .then(result => this.setState({loggedUser: result.value}))
         .catch(error => console.log('error', error));
         console.log(this.state.loggedUser);
    }

    //aqui é gerada a navbar da aplicação. cada elemento da barra pode ser clicado e redireciona para a página correspondente ao identificador, utilizando os links.
    render()
    {
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-dark bg-gradient d-flex shadow">
                <div class="row w-100">
                    <div class="col-2 ps-4 align-self-center">
                        <div class="row">
                            <div class="col-4 p-2 m-1 small">
                                {window.location.href.includes('movies') 
                                    ?
                                    <Link to = '/movies' style={{ textDecoration: 'none', color: 'red', borderBottom: '1px solid red'}}><span id = "movieSpan" class = "activePage">Filmes</span></Link>
                                    :
                                    <Link to = '/movies' style={{ textDecoration: 'none', color: 'white'}}><span id = "movieSpan" class = "activePage">Filmes</span></Link>             
                                }                  
                            </div>
                            <div class="col-4 p-2 m-1 small border-start">
                                {window.location.href.includes('series') 
                                    ?
                                    <Link to = '/series' style={{ textDecoration: 'none', color: 'red', borderBottom: '1px solid red'}}><span class = "activePage">Séries</span></Link>
                                    :
                                    <Link to = '/series' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">Séries</span></Link>
                                }       
                            </div>  
                        </div>                              
                    </div>
                    <div class="col align-self-center">
                        <Link to = '/' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">ShowSpot</span></Link>
                    </div>
                    <div class="col-2 text-end small align-self-center">
                            {this.state.loggedUser == null 
                            ?
                                <div class="row justify-content-end">
                                    <div class="col-4 p-2 m-1 small">
                                        {window.location.href.includes('login') 
                                            ?
                                            <Link to = '/login' style={{ textDecoration: 'none', color: 'red', borderBottom: '1px solid red'}}><span class = "activePage">Login</span></Link>
                                            :
                                            <Link to = '/login' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">Login</span></Link>
                                        }
                                    </div>
                                    <div class="col-4 p-2 m-1 small border-start">
                                        {window.location.href.includes('register') 
                                        ?
                                        <Link to = '/register' style={{ textDecoration: 'none', color: 'red', borderBottom: '1px solid red'}}><span class = "activePage">Registar</span></Link>
                                        :
                                        <Link to = '/register' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">Registar</span></Link>
                                        }
                                    </div>
                                </div>
                            :
                            <div class="row justify-content-end">
                                <div class="col-6 p-2 m-1 small">
                                {window.location.href.includes('userpage') 
                                    ?
                                    <Link to = '/userpage' style={{ textDecoration: 'none', color: 'red', borderBottom: '1px solid red'}}><span class = "activePage">{this.state.loggedUser}</span></Link>
                                    :
                                    <Link to = '/userpage' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">{this.state.loggedUser}</span></Link>
                                    }
                                    <Link></Link>
                                </div>
                                <div class="col-4 p-2 m-1 small border-start">
                                    {window.location.href.includes('library') 
                                    ?
                                    <Link to = '/library' style={{ textDecoration: 'none', color: 'red', borderBottom: '1px solid red'}}><span class = "activePage">Biblioteca</span></Link>
                                    :
                                    <Link to = '/library' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">Biblioteca</span></Link>
                                    }
                                </div>    
                            </div>
                            }              
                    </div>
                </div>
            </nav>
        )
    }
}
export default TopBar;

