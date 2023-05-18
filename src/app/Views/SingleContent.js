import React, { Component } from 'react';
import '../TopBar.css';
import TopBar from '../TopBar';

class SingleContent extends Component 
{ 
    state = { contentId: "", movieInfo: {}, htmlCont: ''}

    async componentDidMount(){
        await this.getId();
        await this.getContentById();
        this.generateDivs();
    }

    async getId(){
        let id = window.location.href.substring(window.location.href.lastIndexOf('/')+1, window.location.href.length);
        //console.log(id);
        await this.setState({contentId: id})
    }

    async getContentById(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            header:{
                'Access-Control-Allow-Origin':'*'
            }
        };

        await fetch('https://localhost:7110/api/ConteudosAPI/'+this.state.contentId, requestOptions)
            .then(res => res.json())
            .then(result => this.setState({movieInfo: result.value}))
    }

    async generateDivs(){
        let html = ''

        // ás vezes não dá render ¯\_(ツ)_/¯ oh well
        html=(
            <div class='row contentCard'>
                <div class='col-4 contentCard-left d-flex flex-column'>
                    <img class="mt-4 mb-2" style={{objectFit: 'contain',height:'450px'}} src={this.state.movieInfo[0].imgUrl}/>
                    <div class="row justify-content-center mb-5"><strong>{this.state.movieInfo[0].nome}</strong></div>
                    <div class="row fs-6 justify-content-center">Ano lançamento: {this.state.movieInfo[0].anoLancamento}</div>
                    <div class="row fs-6 justify-content-center">Duração: {this.state.movieInfo[0].runtime}</div>
                    <div class="row fs-6 justify-content-center">Rating: {this.state.movieInfo[0].rating}</div>
                    <div class="row fs-6 justify-content-center">Tag(s): {this.state.movieInfo[0].tag}</div>
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