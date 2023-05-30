import React, { Component } from 'react';
import '../TopBar.css';
import TopBar from '../TopBar';
import Favoritos from '../Favoritos';
import WatchLaters from '../WatchLaters';

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
                            <Favoritos/>
                            <h1 class = "loginRegisterFont">WatchLater</h1>
                            <WatchLaters/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Library;