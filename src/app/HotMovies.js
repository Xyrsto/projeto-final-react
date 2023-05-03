import React, { Component } from 'react';
import './TopBar.css';

class HotMovies extends Component
{
    render(){
        return(
            <div class = "row pt-4">
                        <h1 class = "hotMovies">Hot Movies</h1>
                        <div className = "filme" class = "text-center">
                            <img class = "filmes"src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scream-vi_bevzvyks_480x.progressive.jpg?v=1676559336"></img>
                            <img class = "filmes" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/0207cfafe175137bed7bd9d96ea2264a_480x.progressive.jpg?v=1573572636"></img>
                            <img class = "filmes" src = "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg"></img>
                        </div>
            </div>      
        )
    }
}

export default HotMovies;