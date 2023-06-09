import React, { Component } from 'react';
import '../TopBar.css';
import TopBar from '../TopBar';
import AllMovies from '../AllMovies';

//página de filmes. Contém o componente TopBar e o componente AllMovies
class Movies extends Component 
{
    render(){
        return(
            <div class = "fixed-top container-fluid  p-0" style={{maxHeight:"100%", overflowY: 'auto', maxWidth: "100%"}}>
                <TopBar/>
                <AllMovies/>
            </div>
        )
    }
}

export default Movies;