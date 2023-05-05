import React, { Component } from 'react';
import './TopBar.css';
import TopBar from '../TopBar';
import AllSeries from '../AllSeries';


class Series extends Component 
{
    render(){
        return(
            <div class = "fixed-top container-fluid  p-0">
                <TopBar/>
                <AllSeries/>
            </div>
        )
    }
}

export default Series;