import React, { Component } from 'react';
import './TopBar.css';


class MainScreen extends Component
{
    render()
    {
        return(
            <div>
                <div class = "fixed-top container-fluid  p-0">
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
                    <div class = "row pt-4">
                        <h1 class = "hotMovies">Hot Movies</h1>
                        <div className = "filme" class = "text-center">
                            <img class = "filmes"src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scream-vi_bevzvyks_480x.progressive.jpg?v=1676559336"></img>
                            <img class = "filmes" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/0207cfafe175137bed7bd9d96ea2264a_480x.progressive.jpg?v=1573572636"></img>
                            <img class = "filmes" src = "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg"></img>
                        </div>
                    </div>      
                </div>             
            </div>
                           
        )
    }
}
export default MainScreen;