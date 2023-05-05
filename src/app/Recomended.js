import React, { Component } from 'react';
import './TopBar.css';

class Recomended extends Component
{
    render(){
        return(
            <div class = "row pt-4 pt-5">
                <h1 class = "loginRegisterFont">Recomended</h1>
                <div className = "filme" class = "text-center">
                    <img class = "filmes" alt = "filme" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scream-vi_bevzvyks_480x.progressive.jpg?v=1676559336"></img>
                    <img class = "filmes" alt = "filme" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540"></img>
                    <img class = "filmes" alt = "filme" src = "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg"></img>
                </div>
            </div>
        )
    }
}

export default Recomended;