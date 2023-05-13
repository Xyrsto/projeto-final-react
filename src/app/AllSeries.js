import React, { Component } from 'react';
import './TopBar.css';

class AllSeries extends Component 
{
    state = { listaSeries: []}

    componentDidMount(){
        this.buscarSeries();
    }

    async buscarSeries(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            header:{
                'Access-Control-Allow-Origin':'*'
            }
        };

        await fetch('https://localhost:7110/api/ConteudosAPI/series', requestOptions)
            .then(res => res.json())
            .then(result => this.setState({listaSeries: result.value}))
            .catch(error => console.log('error', error));

        console.log(this.state.listaSeries);
    }

    render(){
        let htmlSeries = []

        //as classes foram reaproveitadas do allmovies, visto que o estilo para cada série é o mesmo.
        this.state.listaSeries.forEach(element =>
            htmlSeries.push(
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
                            {htmlSeries}
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default AllSeries;