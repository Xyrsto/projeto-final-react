import React, { Component } from 'react';
import '../TopBar.css';
import TopBar from '../TopBar';

//página de conteúdo individual. Contém o componente TopBar e o componente SingleContent.
class SingleContent extends Component 
{ 
    state = { contentId: "", movieInfo: {}, htmlCont: '', loggedUser: ''}

    async componentDidMount(){
        await this.getId();
        await this.getContentById();
        await this.getUser();
        this.generateDivs();
    }

    async getId(){
        let id = window.location.href.substring(window.location.href.lastIndexOf('/')+1, window.location.href.length);
        //console.log(id);
        await this.setState({contentId: id})
    }

    //GET para buscar a informação de um conteúdo específico, dado o ID
    async getContentById(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            header:{
                'Access-Control-Allow-Origin':'*'
            }
        };

        await fetch('/api/ConteudosAPI/conteudo/'+this.state.contentId, requestOptions)
            .then(res => res.json())
            .then(result => this.setState({movieInfo: result.value}))
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

    //POST para adicionar um conteúdo à biblioteca de watch later de um utilizador
    async addWatchLater(idFilme, username){
        var formData = new FormData();
        formData.append("idFilme", idFilme);
        formData.append("username", username);

        var requestOptions = {
            method: 'POST',
            redirect: 'follow',
            body: formData
        };
        try
        {
            const response = await fetch('/api/ConteudosAPI/addWatchLater', requestOptions)
            const data = await response.json();

            if(response.ok){
                console.log("SUCESSO");
                window.location.href='/movies'
            }
            else{
                console.log("ERRO ", data);
            }
        }
        catch(error){
            console.log('Error:', error);
        }
    }


    //POST para adicionar um conteúdo à biblioteca de favoritos de um utilizador
    async addFavorito(idFilme, username){
        var formData = new FormData();
        formData.append("idFilme", idFilme);
        formData.append("username", username);

        var requestOptions = {
            method: 'POST',
            redirect: 'follow',
            body: formData
        };
        try
        {
            const response = await fetch('/api/ConteudosAPI/addFavorito', requestOptions)
            const data = await response.json();

            if(response.ok){
                console.log("SUCESSO");
                window.location.href='/movies'
            }
            else{
                console.log("ERRO ", data);
            }
        }
        catch(error){
            console.log('Error:', error);
        }
    }

    async generateDivs(){
        let html = ''

        // ás vezes não dá render ¯\_(ツ)_/¯ oh well.
        html=(
            <div class='row contentCard'>
                <div class='col-4 contentCard-left d-flex flex-column'>
                    <img class="mt-4 mb-2" style={{objectFit: 'contain',height:'450px'}} src={this.state.movieInfo[0].imgUrl}/>
                    <div class="row justify-content-center mb-5"><strong>{this.state.movieInfo[0].nome}</strong></div>
                    <div class="row fs-6 justify-content-center">Ano lançamento: {this.state.movieInfo[0].anoLancamento}</div>
                    <div class="row fs-6 justify-content-center">Duração: {this.state.movieInfo[0].runtime}</div>
                    <div class="row fs-6 justify-content-center">Rating: {this.state.movieInfo[0].rating}</div>
                    <div class="row fs-6 justify-content-center">Tag: {this.state.movieInfo[0].tag}</div>

                    {/*Este botão aqui! Já funciona!*/}
                    <div clas = "row fs-6 justify-content-center">
                        <button type="submit" class="btn btn-secondary" onClick = {() => this.addFavorito(this.state.contentId, this.state.loggedUser)}>Adicionar à biblioteca</button>
                    </div>
                    <div clas = "row fs-6 justify-content-center">
                        <button type="submit" class="btn btn-secondary" onClick = {() => this.addWatchLater(this.state.contentId, this.state.loggedUser)}>Ver mais tarde</button>
                    </div>
                </div>
                <div class='col contentCard-right'>
                    <div class="row m-2 mb-3">Sinopse:</div>
                    <div class="row fs-4 ps-5 pe-5 justify-content-center mb-5">{this.state.movieInfo[0].sinopse}</div>
                    <div class="row justify-content-center mb-5">
                    <iframe height="500" src={this.state.movieInfo[0].linkTrailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            );

        await this.setState({htmlCont: html})
    }

    render(){
        return(
            <div class = "fixed-top container-fluid  p-0" style={{maxHeight:"100%"}}>
                <TopBar/>
                <div class = "container-fluid p-0">                    
                    {this.state.htmlCont}
                </div>
            </div>
        )
    }
}

export default SingleContent;