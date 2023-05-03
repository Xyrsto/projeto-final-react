import React, { Component } from 'react';
import './TopBar.css';


class TopBar extends Component
{
    render()
    {
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-dark bg-gradient d-flex shadow">
                <div class="row w-100">
                    <div class="col-2 ps-4 align-self-center">
                        <div class="row">
                            <div class="col-4 p-2 m-1 small">Movies</div>
                            <div class="col-4 p-2 m-1 small border-start">Series</div>  
                        </div>                              
                    </div>
                    <div class="col align-self-center">ShowSpot</div>
                    <div class="col-2 pe-4 text-end small align-self-center">Account</div>
                </div>
            </nav>
        )
    }
}
export default TopBar;

