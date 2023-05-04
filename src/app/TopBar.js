import React, { Component } from 'react';
import './TopBar.css';
import {Link} from 'react-router-dom';



class TopBar extends Component
{
    render()
    {
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-dark bg-gradient d-flex shadow">
                <div class="row w-100">
                    <div class="col-2 ps-4 align-self-center">
                        <div class="row">
                            <div class="col-4 p-2 m-1 small">
                                <Link to = '/movies' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">Movies</span></Link>
                            </div>
                            <div class="col-4 p-2 m-1 small border-start">
                                <Link to = '/series' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">Series</span></Link>
                            </div>  
                        </div>                              
                    </div>
                    <div class="col align-self-center">
                        <Link to = '/' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">ShowSpot</span></Link>
                    </div>
                    <div class="col-2 text-end small align-self-center">
                        <div class="row justify-content-end">
                            <div class="col-4 p-2 m-1 small">
                                <Link to = '/login' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">Login</span></Link>
                            </div>
                            <div class="col-4 p-2 m-1 small border-start">
                                <Link to = '/register' style={{ textDecoration: 'none', color: 'white'}}><span class = "activePage">Register</span></Link>
                            </div>    
                        </div>               
                    </div>
                </div>
            </nav>
        )
    }
}
export default TopBar;

