import React, { Component } from 'react';
import './TopBar.css';


class TopBar extends Component
{
    render()
    {
        return(
            <div>
                <div class = "fixed-top container-fluid bg-dark bg-gradient">
                    <nav class="navbar navbar-expand-lg navbar-light bg-dark bg-gradient">
                        <div class="h1 pl-4 text-light ">Show Spot</div>
                        <div class="collapse navbar-collapse d-flex flex-row-reverse">
                            <div class="navbar-nav">
                                <div class="nav-item nav-link active display-1 text-light pd-2">Movies</div>
                                <div class="nav-item nav-link display-1 text-light pd-2">Series</div>
                                <div class="nav-item nav-link display-1 text-light pd-2">Account</div>
                            </div>
                        </div>
                    </nav>
                </div>   
                <div class = "TopBar">asdasd</div>  
            </div>
                           
        )
    }
}
export default TopBar;