import React, { Component } from 'react';
import '../TopBar.css';
import {Link} from 'react-router-dom';

class LoggedTopBar extends Component
{
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
                        <div class="row justify-content-end">
                            <div class="col-6 p-2 m-1 small">
                                <span class = "activePage" style={{ textDecoration: 'none', color: 'white'}}>NOME_USER</span>
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
                    </div>
                </div>
            </nav>
        )
    }
}
export default LoggedTopBar;

