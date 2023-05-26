import React, { Component } from 'react';
import './TopBar.css';

//classe que contém todos os filmes. É chamada na página de filmes.
class AllMovies extends Component 
{
    state = { listaFilmes: [], listaTags: [], htmlCont: []}

    async componentDidMount(){
        await this.buscarFilmes();
        await this.buscarTags();
        this.generateDivs();
    }

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

    async buscarFilmesByTag(tag){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            header:{
                'Access-Control-Allow-Origin':'*'
            }
        };

        await fetch('/api/ConteudosAPI/filmes/'+tag, requestOptions)
            .then(res => res.json())
            .then(result => this.setState({listaFilmes: result.value}))
            .catch(error => console.log('error', error));

    }

    async buscarTags()
    {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            header:{
                'Access-Control-Allow-Origin':'*'
            }
        };

        await fetch('/api/ConteudosAPI/nomeTags', requestOptions)
            .then(res => res.json())
            .then(result => this.setState({listaTags: result.value}))

        console.log('tags func: '+this.state.listaTags);
    }

    //esta função gera o div para cada filme. Ainda não gera dependedo da tag.
    htmlFilmes(tagFilter)
    {
        let htmlFilmes = []

        this.state.listaFilmes.forEach(element => {
            if (element.tag === tagFilter) {
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
            }}
        );
        return htmlFilmes;
    }

    //esta função gera os divs que contêm os filmes para cada nome de cada tag. Os filmes dentro deles ainda não estão filtrados por tag.
    generateDivs()
    {
        let htmlDivs = []
        let filmeDiv = ''
        
        this.state.listaTags.forEach(element => { 
            filmeDiv = this.htmlFilmes(element.nome)
            htmlDivs.push(
                <div class = "mt-3 pt-2 pb-3">
                    <h1 class = "loginRegisterFont">{element.nome}</h1>
                    <div class="all_filmes d-flex justify-content-center">
                        {filmeDiv}
                    </div>                     
                </div>     
            )}  
        );

        this.setState({htmlCont: htmlDivs}) ;
    }

    render(){
        return(
            <div class = "container-fluid p-0" style={{overflow: 'hidden'}}>
                <div class = "row" style={{maxHeight: "100%"}}>
                    {this.state.htmlCont}  
                </div>
            </div>
        )
    }
}
export default AllMovies;