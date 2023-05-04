import React, { Component } from 'react';
import './TopBar.css';
import TopBar from './TopBar';


class Movies extends Component 
{
    render(){
        return(
            <div class = "fixed-top container-fluid  p-0">
                <TopBar/>
                <h1>Ola</h1>
            </div>
        )
    }
}

export default Movies;