import React, { Component } from 'react';
import './TopBar.css';
import {Link} from 'react-router-dom';



class TopBar extends Component
{    
    state = { loggedUser: ''}

    componentDidMount(){
        this.getUser();
    }

    async getUser(){
        var requestOptions = {
            method: 'GET',
            credentials: 'include',
            header:{
                'Access-Control-Allow-Origin':'*'
            }
          };

         // Make the fetch request
         await fetch('https://localhost:7110/api/ConteudosAPI/getUser', requestOptions)
         .then(res => res.json())
         .then(result => this.setState({loggedUser: result.value}))
         .catch(error => console.log('error', error));
    }

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
                                    <Link to = '/movies' style={{ textDecoration: 'none', color: 'red', borderBottom: '1px solid red'}}><span id = "movieSpan" class = "activePage">Movies</span></Link>
                                    :
                                    <Link to = '/movies' style={{ textDecoration: 'none', color: 'white'}}><span id = "movieSpan" class = "activePage">Movies</span></Link>             
                                }                  
                            </div>
                            <div class="col-4 p-2 m-1 small border-start">
                                {window.location.href.includes('series') 
                                    ?
                                    <Link to = '/series' style={{ textDecoration: 'none', color: 'red', borderBottom: '1px solid red'}}><span class = "activePage">Series</span></Link>
                                    :
                                    <Link to = '/series' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">Series</span></Link>
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
                                        <Link to = '/register' style={{ textDecoration: 'none', color: 'red', borderBottom: '1px solid red'}}><span class = "activePage">Register</span></Link>
                                        :
                                        <Link to = '/register' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">Register</span></Link>
                                        }
                                    </div>
                                </div>
                            :
                            <div class="row justify-content-end">
                                <div class="col-6 p-2 m-1 small">
                                    <span class = "activePage" style={{ textDecoration: 'none', color: 'white'}}>{this.state.loggedUser}</span>
                                </div>
                                <div class="col-4 p-2 m-1 small border-start">
                                    {window.location.href.includes('library') 
                                    ?
                                    <Link to = '/library' style={{ textDecoration: 'none', color: 'red', borderBottom: '1px solid red'}}><span class = "activePage">Library</span></Link>
                                    :
                                    <Link to = '/library' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">Library</span></Link>
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

