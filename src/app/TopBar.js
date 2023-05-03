import React, { Component } from 'react';


class TopBar extends Component
{
    render()
    {
        return(
            <div class = "fixed-top container-fluid bg-dark">
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <div class="h1 pl-4 text-light ">Show Spot</div>
                    <div className = "TopBar" class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <div class="nav-item nav-link active display-1 text-light pd-2">Movies</div>
                            <div class="nav-item nav-link display-1 text-light pd-2">Series</div>
                            <div class="nav-item nav-link display-1 text-light pd-2">Account</div>
                        </div>
                    </div>
                </nav>
            </div>          
        )
    }
}
export default TopBar;