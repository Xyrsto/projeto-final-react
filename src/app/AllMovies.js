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

        await fetch('https://localhost:7110/api/ConteudosAPI/filmes', requestOptions)
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
                </div>
            </div>
        )
    }
}
export default AllMovies;