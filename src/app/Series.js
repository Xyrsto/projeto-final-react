import React, { Component } from 'react';
import './TopBar.css';
import TopBar from './TopBar';


class Series extends Component 
{
    render(){
        return(
            <div class = "fixed-top container-fluid  p-0">
                <TopBar/>
                <h1>Adeus</h1>
            </div>
        )
    }
}

export default Series;