import React, { Component } from 'react';
import './TopBar.css';

class AllMovies extends Component 
{
    state = { listaFilmes: []}

    componentDidMount(){
        this.buscarFilmes();
    }

    async buscarFilmes(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            header:{
                'Access-Control-Allow-Origin':'*'
            }
        };

        await fetch('http://localhost:5284/api/filmes', requestOptions)
            .then(res => res.json())
            .then(result => this.setState({listaFilmes: result.value}))
            .catch(error => console.log('error', error));

        console.log(this.state.listaFilmes);
    }


    render(){
        let htmlFilmes = []

        this.state.listaFilmes.forEach(element =>
            htmlFilmes.push(
                <div class="filmeCard">
                    <img class = "filmes" alt = "filme" src = { element.imgUrl } title={element.nome}/>
                    <div class="filme-overlay">
                        <strong>{element.nome}</strong>
                        <span class="position-absolute bottom-0 fs-5 mb-2" style={{left: "0px", right: "0px"}}>{element.rating}</span>
                    </div>
                </div>
            ) 
        );
        return(
            <div class = "container-fluid p-0" style={{overflow: 'hidden'}}>
                <div class = "row" style={{maxHeight: "100%"}}>
                    <div class = "mt-3 pt-2 pb-3">
                        <h1 class = "loginRegisterFont">Drama</h1>
                        <div class="all_filmes d-flex justify-content-center">
                            {htmlFilmes}
                        </div>
                        
                    </div>
                    
                    
                    
                    {/* 
                    <div class = "mt-3 pt-2 pb-3">
                        <h1 class = "loginRegisterFont">Drama</h1>
                        <img style = {{paddingLeft: '0'}} class = "filmes" alt = "filme" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scream-vi_bevzvyks_480x.progressive.jpg?v=1676559336"></img>
                        <img class = "filmes" alt = "filme" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540"></img>
                        <img class = "filmes" alt = "filme" src = "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg"></img>
                        <img class = "filmes" alt = "filme" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scream-vi_bevzvyks_480x.progressive.jpg?v=1676559336"></img>
                        <img class = "filmes" alt = "filme" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540"></img>
                        <img class = "filmes" alt = "filme" src = "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg"></img>
                        <img class = "filmes" alt = "filme" src = "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg"></img>
                    </div>
                    <div class = "mt-3 pt-2 pb-3">
                        <h1 class = "loginRegisterFont">Comédia</h1>
                        <img style = {{paddingLeft: '0'}} class = "filmes" alt = "filme" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scream-vi_bevzvyks_480x.progressive.jpg?v=1676559336"></img>
                        <img class = "filmes" alt = "filme" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540"></img>
                        <img class = "filmes" alt = "filme" src = "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg"></img>
                        <img class = "filmes" alt = "filme" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scream-vi_bevzvyks_480x.progressive.jpg?v=1676559336"></img>
                        <img class = "filmes" alt = "filme" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540"></img>
                        <img class = "filmes" alt = "filme" src = "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg"></img>
                        <img class = "filmes" alt = "filme" src = "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg"></img>
                    </div>
                    <div class = "mt-3 pt-2 pb-3">
                        <h1 class = "loginRegisterFont">Comédia</h1>
                        <img style = {{paddingLeft: '0'}} class = "filmes" alt = "filme" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scream-vi_bevzvyks_480x.progressive.jpg?v=1676559336"></img>
                        <img class = "filmes" alt = "filme" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540"></img>
                        <img class = "filmes" alt = "filme" src = "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg"></img>
                        <img class = "filmes" alt = "filme" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scream-vi_bevzvyks_480x.progressive.jpg?v=1676559336"></img>
                        <img class = "filmes" alt = "filme" src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540"></img>
                        <img class = "filmes" alt = "filme" src = "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg"></img>
                        <img class = "filmes" alt = "filme" src = "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg"></img>
                    </div>
                    */}

                    
                    
                </div>
            </div>
        )
    }
}
export default AllMovies;