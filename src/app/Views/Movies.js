import React, { Component } from 'react';
import '../TopBar.css';
import TopBar from '../TopBar';
import AllMovies from '../AllMovies';


class Movies extends Component 
{
    render(){
        return(
            <div class = "fixed-top container-fluid  p-0" style={{maxHeight:"100%", overflow: 'auto'}}>
                <TopBar/>
                <AllMovies/>
            </div>
        )
    }
}

export default Movies;