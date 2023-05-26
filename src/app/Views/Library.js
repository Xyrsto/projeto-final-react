import React, { Component } from 'react';
import '../TopBar.css';
import TopBar from '../TopBar';

class Library extends Component 
{
    //página de favoritos para cada utilizador(ainda não está concluída)
    render(){
        return(
            <div class = "fixed-top container-fluid  p-0" style={{maxHeight:"100%"}}>
                <TopBar/>
                <div class = "container-fluid p-0">
                    <div class = "row" style={{maxHeight: "100%"}}>
                        <div class = "mt-3 pt-2 pb-3">
                            <h1 class = "loginRegisterFont">Favoritos</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Library;