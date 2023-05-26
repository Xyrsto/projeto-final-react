import React, { Component } from 'react';
import './TopBar.css';

class HotMovies extends Component
{
    state = {listaFilmes: [], htmlCont: []}

    async componentDidMount(){
        await this.buscarFilmes();
        this.htmlFilmes();
    }

    //GET para ir buscar o filmes ao servidor e atualizar o estado com os filmes.
    async buscarFilmes(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            header:{
                'Access-Control-Allow-Origin':'*'
            }
        };

        await fetch('/api/ConteudosAPI/filmes', requestOptions)
            .then(res => res.json())
            .then(result => this.setState({listaFilmes: result.value}))
            .catch(error => console.log('error', error));
    }

    //gera os divs com os filmes
    htmlFilmes()
    {
        let htmlFilmes = []

        this.state.listaFilmes.forEach(element => {
                if(element.anoLancamento >= 2022)
                {
                    htmlFilmes.push(
                        <a class="filmeHref" href={`/conteudos/`+element.id}>
                            <div class="filmeCard">
                                <img class = "filmes" alt = "filme" src = { element.imgUrl } title={element.nome}/>
                                <div class="filme-overlay">
                                    <strong>{element.nome}</strong>
                                    <span class="position-absolute bottom-0 fs-5 mb-2" style={{left: "0px", right: "0px"}}>{element.rating}</span>
                                </div>
                            </div>
                        </a>
                    ) 
                }               
            }
        );
        console.log(htmlFilmes);
        this.setState({htmlCont: htmlFilmes})
    }

    render(){
        return(
            <div class = "row pt-4">
                <h1 class = "loginRegisterFont">Hot Movies</h1>
                <div className = "filme" class = "text-center">
                    <div class="all_filmes d-flex justify-content-center">
                    {this.state.htmlCont}
                    </div>                     
                </div>
            </div>      
        )
    }
}

export default HotMovies;