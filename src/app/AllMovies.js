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

    // GET para ir buscar todos os filmes e os seus detalhes
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

    // GET para ir buscar o nome de todas as tags
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

    //esta função gera o div para cada filme apenas se a sua tag corresponder à tag onde será a colocado.
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

    //esta função gera os divs que contêm os filmes para cada nome de cada tag.
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