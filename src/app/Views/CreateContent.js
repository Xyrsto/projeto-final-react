import React, { Component } from 'react';
import '../TopBar.css';
import TopBar from '../TopBar';

class CreateContent extends Component
{
    state = {loggedUser: ''}

    componentDidMount(){
        this.getUser();
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
            console.log(this.state.loggedUser);
    }

    trimUsername(email) {
        if (email && email.trim().length > 0) {
          const atIndex = email.indexOf('@');
          
          // verifica se existe @
          if (atIndex !== -1) {
            const username = email.substring(0, atIndex);
            return username;
          } 
          else 
          {
            // se @não existe, o username é o email
            return email;
          }
        } 
        else 
        {
          // trata de valores null
          return '';
        }
    }

    async createContent(nome, urlImagem, sinopse, rating, runtime, anoLancamento, linkTrailer) {
        var requestOptions = {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Nome: nome,
                ImgUrl: urlImagem,
                Sinopse: sinopse,
                Rating: rating,
                Tipo: document.getElementById('Tipo').checked ? true : false,
                Runtime: runtime,
                AnoLancamento: anoLancamento,
                LinkTrailer: linkTrailer
            })
        };
    
        try {
            const response = await fetch('/api/ConteudosAPI/addConteudo', requestOptions);
            const data = await response.json();
    
            if (response.ok) {
                console.log("SUCESSO");
                window.location.href = '/';
            } else {
                console.log("ERRO ", data);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }

    render()
    {
        if(this.trimUsername(this.state.loggedUser) !== 'admin'){
            return(
                <div>
                    <h1 style = {{color: "red", WebkitTextStrokeWidth:"1px", WebkitTextStrokeColor:"black"}}>ERRO! Não tem permissão para aceder a esta página.</h1>
                </div>
            )
        }
        return(
            <div class = "fixed-top container-fluid p-0">
                <TopBar/>
                <h1 style={{color:"black"}}>Create</h1>
                <h4 style={{color:"black"}}>Conteudos</h4>
                <hr />
                <div class="row justify-content-center">
                    <div class="col-md-4">
                            <div class="text-danger"></div>
                            <div class="form-group">
                                <h3 style={{color:"black"}} class="control-label">Nome</h3>
                                <input id="Nome" name="Nome" class="form-control" />
                                <span class="text-danger"></span>
                            </div>
                            <div class="form-group">
                                <h3 style={{color:"black"}} class="control-label">URL da imagem</h3>
                                <input id="ImgUrl" name="ImgUrl" class="form-control" />
                                <span class="text-danger"></span>
                            </div>
                            <div class="form-group">
                                <h3 style={{color:"black"}} class="control-label">Sinopse</h3>
                                <input id="Sinopse" name="Sinopse" class="form-control" />
                                <span class="text-danger"></span>
                            </div>
                            <div class="form-group">
                                <h3 style={{color:"black"}} class="control-label">Rating</h3>
                                <input id="Rating" name="Rating" class="form-control" />
                                <span class="text-danger"></span>
                            </div>
                            <div class="form-group form-check">
                                <label style={{color:"black"}} class="form-check-label">
                                    <input type="checkbox" id="Tipo" name="Tipo" class="form-check-input"/> Tipo
                                </label>
                            </div>
                            <div class="form-group">
                                <h3 style={{color:"black"}} class="control-label">Runtime</h3>
                                <input id="Runtime" name="Runtime" class="form-control" />
                                <span class="text-danger"></span>
                            </div>
                            <div class="form-group">
                                <h3 style={{color:"black"}} class="control-label">Ano de lançamento</h3>
                                <input id="AnoLancamento" name="AnoLancamento" class="form-control" />
                                <span class="text-danger"></span>
                            </div>
                            <div class="form-group">
                                <h3 style={{color:"black"}} class="control-label">Link do trailer</h3>
                                <input id="LinkTrailer" name="LinkTrailer" class="form-control" />
                                <span class="text-danger"></span>
                            </div>
                            <div class="form-group">
                            <button type="submit" class="btn btn-secondary" onClick={() => this.createContent(
                                                                                                document.getElementById('Nome').value, 
                                                                                                document.getElementById('ImgUrl').value, 
                                                                                                document.getElementById('Sinopse').value,
                                                                                                document.getElementById('Rating').value,
                                                                                                document.getElementById('Runtime').value,
                                                                                                document.getElementById('AnoLancamento').value,
                                                                                                document.getElementById('LinkTrailer').value
                                                                                            )                                                                                            
                                                                                    } >Adicionar Conteúdo</button>
                            </div>
                    </div>
                </div>
            </div>                    
        )
    }
}
export default CreateContent;