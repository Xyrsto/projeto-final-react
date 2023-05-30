import React, { Component } from 'react';
import './TopBar.css';

class Recomended extends Component
{
    state = {loggedUser:"", listaRecs: [], listaFilmes: [], htmlCont: []}
    async componentDidMount(){
        await this.getUser();
        await this.getRecomendados();
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

    //GET para receber os recomendados do utilizador
    async getRecomendados(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            inclues: 'credentials',
            header:{
                'Access-Control-Allow-Origin':'*'
            }
          };

        const url = "api/ConteudosAPI/recs/"+this.state.loggedUser;
        // Make the fetch request
        await fetch(url, requestOptions)
        .then(res => res.json())
        .then(result => {
            this.state.listaRecs.push(result.value)
            this.getFilmes()
        })
        .catch(error => console.log('error', error));
        
        
        
    }

    //GET para ir buscar o filme ao servidor e atualizar o estado com o filme.
    async getFilmes(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            header:{
                'Access-Control-Allow-Origin':'*'
            }
        };

        this.state.listaRecs[0].forEach(async contId => {
            await fetch('api/conteudosApi/conteudo/'+contId, requestOptions)
            .then(res => res.json())
            .then(result => {
                this.state.listaFilmes.push(result.value)
                this.htmlFilmes();
                
            })
            .catch(error => console.log('error', error)); 
        });
    }

        //esta função gera o div para cada filme. Ainda não gera dependedo da tag.
        htmlFilmes()
        {
            let htmlFilmes = []
    
            this.state.listaFilmes.forEach(element => { 
                htmlFilmes.push(
                    <a class="filmeHref" href={`/conteudos/`+element[0].id}>
                        <div class="filmeCard">
                            <img class = "filmes" alt = "filme" src = { element[0].imgUrl } title={element[0].nome}/>
                            <div class="filme-overlay">
                                <strong>{element[0].nome}</strong>
                                <span class="position-absolute bottom-0 fs-5 mb-2" style={{left: "0px", right: "0px"}}>{element.rating}</span>
                            </div>
                        </div>
                    </a>
                ) 
            });

            this.setState({htmlCont: htmlFilmes}) ;
        }


    render(){
        return(
            <div class = "row pt-4 pt-5">
                <h1 class = "loginRegisterFont">Recomended</h1>
                <div class="all_filmes d-flex justify-content-center">
                    {this.state.htmlCont}
                </div>
            </div>
        )
    }
}

export default Recomended;