import React, { Component } from 'react';
import './TopBar.css';

class AllSeries extends Component 
{
    state = { listaSeries: [], listaTags: [], htmlCont: []}

    async componentDidMount(){
        await this.buscarSeries();
        await this.buscarTags();
        this.generateDivs();
    }

    async buscarSeries(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            header:{
                'Access-Control-Allow-Origin':'*'
            }
        };

        await fetch('/api/ConteudosAPI/series', requestOptions)
            .then(res => res.json())
            .then(result => this.setState({listaSeries: result.value}))
            .catch(error => console.log('error', error));

        console.log(this.state.listaSeries);
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
            .catch(error => console.log('error', error));

        console.log(this.state.listaTags);
    }

    //esta função gera o div para cada série. Ainda não gera dependedo da tag.
    htmlSeries(tagFilter)
    {
        let htmlSeries = []

        //as classes foram reaproveitadas do allmovies, visto que o estilo para cada série é o mesmo.
        this.state.listaSeries.forEach(element => {
            if(element.tag === tagFilter){
                htmlSeries.push(
                    <div class="filmeCard">
                        <img class = "filmes" alt = "filme" src = { element.imgUrl } title={element.nome}/>
                        <div class="filme-overlay">
                            <strong>{element.nome}</strong>
                            <span class="position-absolute bottom-0 fs-5 mb-2" style={{left: "0px", right: "0px"}}>{element.rating}</span>
                        </div>
                    </div>
                )
            }}
        );

        return htmlSeries;
    }

    //esta função gera os divs que contêm as séries para cada nome de cada tag. As séries geradas ainda não são filtradas por tag.
    generateDivs()
    {
        let htmlDivs = []
        let seriesDiv = ''

        this.state.listaTags.forEach(element => {
            seriesDiv = this.htmlSeries(element.nome)
            htmlDivs.push(
                <div class = "mt-3 pt-2 pb-3">
                        <h1 class = "loginRegisterFont">{element.nome}</h1>
                        <div class="all_filmes d-flex justify-content-center">
                            {seriesDiv}
                        </div>                     
                    </div>     
            )}  
        );

        this.setState({htmlCont: htmlDivs})
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
export default AllSeries;