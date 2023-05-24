import React, { Component } from 'react';
import './TopBar.css';

class Recomended extends Component
{
    state = {loggedUser:"", listaRecs: [], listaFilmes: [], didFetch: false, htmlCont: []}
    async componentDidMount(){

    }

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

    async getRecomendados(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            inclues: 'credentials',
            header:{
                'Access-Control-Allow-Origin':'*'
            }
          };

          while(this.state.listaRecs.length == 0){
            const loggedUser = this.state.loggedUser
            const url = "api/ConteudosAPI/recs/"+this.state.loggedUser;
            console.log(url);
            // Make the fetch request
            await fetch(url, requestOptions)
            .then(res => res.json())
            .then(result => this.setState({listaRecs:result.value}))
            .catch(error => console.log('error', error));
          }

          this.setState({didFetch: true});
          console.log(this.state.listaRecs);
    }

    async buscarFilme(id){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            header:{
                'Access-Control-Allow-Origin':'*'
            }
        };

        await fetch('/api/ConteudosAPI/conteudo/'+id, requestOptions)
            .then(res => res.json())
            .then(result => {
                // Verifica se o filme já foi adicionado á listaFilmes, se não foi então adiciona
                if(!this.state.listaFilmes.find(e => e.id == result.value[0].id)){
                    this.state.listaFilmes.push(result.value[0])
                }
                
            })
            .catch(error => console.log('error', error));
    }

        //esta função gera o div para cada filme. Ainda não gera dependedo da tag.
        htmlFilmes()
        {
            let htmlFilmes = []
    
            this.state.listaFilmes.forEach(element => { 
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
            );

            this.setState({htmlCont: htmlFilmes}) ;
        }


    render(){
        if(!this.state.didFetch){
            this.getUser();
            this.getRecomendados();
            this.state.listaRecs.forEach(rec => {
                this.buscarFilme(rec[0])
            });
        }
        //this.htmlFilmes();

        console.log(this.state.listaFilmes);
        return(
            <div class = "row pt-4 pt-5">
                <h1 class = "loginRegisterFont">Recomended</h1>
                <div className = "filme" class = "text-center">
                    {this.state.htmlCont}  
                </div>
            </div>
        )
    }
}

export default Recomended;