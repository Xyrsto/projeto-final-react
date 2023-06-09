import React, { Component } from 'react';
import '../TopBar.css';
import TopBar from '../TopBar';
import AllSeries from '../AllSeries';

//página de séries. Contém o componente TopBar e o componente AllSeries
class Series extends Component 
{
    render(){
        return(
            <div class = "fixed-top container-fluid  p-0" style={{maxHeight:"100%", overflowY: 'auto', maxWidth: "100%"}}>
                <TopBar/>
                <AllSeries/>
            </div>
        )
    }
}

export default Series;