import React, { Component } from 'react';
import './TopBar.css';

//classe que contém todos os favoritos de um user
class Favoritos extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {loggedUser: "", listaFavs: [], listaConteudos: [], htmlCont: []}

    }

    async componentDidMount(){
        await this.getUser();
        var url = `/api/conteudosAPI/getFavoritos/${this.state.loggedUser}`
        
        console.log(url);

        if(!url.endsWith('/')){
            await this.buscarFavs(url)
        }
    }

    //GET para ir buscar o utilizador logado ao servidor e atualizar o estado com o utilizador.
    async getUser(){
        var requestOptions = {
        method: 'GET',
        credentials: 'include',
        header:{
            'Access-Control-Allow-Origin':'*'
        }
      };

     // Make the fetch request
     await fetch('/api/ConteudosAPI/getuser', requestOptions)
     .then(res => res.json())
     .then(result => this.setState({loggedUser: result.value}))
     .catch(error => console.log('error', error));
}

    async buscarFavs(url) {
        var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
        };
    
        await fetch(url, requestOptions)
        .then(res => res.json())
        .then(result => {
            this.state.listaFavs.push(result.value)
            this.getFilmes()
        })
        .catch(error => console.log('error', error));
    }

    async getFilmes(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
            };

            this.state.listaFavs[0].forEach(async contId => {
                await fetch('api/conteudosApi/conteudo/'+contId, requestOptions)
                .then(res => res.json())
                .then(result => {
                    this.state.listaConteudos.push(result.value)
                    this.htmlSeries()
                    
                })
                .catch(error => console.log('error', error)); 
            });
        
            
    }
    

    //esta função gera o div para cada série. Ainda não gera dependedo da tag.
    async htmlSeries()
    {
        let htmlSeries = []

        //as classes foram reaproveitadas do allmovies, visto que o estilo para cada série é o mesmo.
        this.state.listaConteudos.forEach(element => {
            htmlSeries.push(
                <a class="filmeHref" href={`/conteudos/`+element[0].id}>
                    <div class="filmeCard">
                        <img class = "filmes" alt = "filme" src = { element[0].imgUrl } title={element[0].nome}/>
                        <div class="filme-overlay">
                            <strong>{element[0].nome}</strong>
                            <span class="position-absolute bottom-0 fs-5 mb-2" style={{left: "0px", right: "0px"}}>{element[0].rating}</span>
                        </div>
                    </div>
                </a>
            ) 
        });

        this.setState({htmlCont: htmlSeries});
    }

    render(){
        return(
            <div class = "container-fluid p-0" style={{overflow: 'hidden'}}>
                <div class = "row" style={{maxHeight: "100%"}}>
                    <div class="all_filmes d-flex justify-content-center">
                        {this.state.htmlCont}
                    </div>
                </div>
            </div>
        )
    }
}
export default Favoritos;