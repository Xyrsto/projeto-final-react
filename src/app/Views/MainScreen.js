import React, { Component } from 'react';
import '../TopBar.css';
import HotMovies from '../HotMovies.js';
import TopBar from '../TopBar.js';
import Recomended from '../Recomended.js';

class MainScreen extends Component
{
    render()
    {
        return(
            <div>
                <div class = "fixed-top container-fluid  p-0" style={{maxHeight:"100%", overflowY: 'auto', overflowX: 'hidden'}}>
                    <TopBar/>
                    <HotMovies/>
                    <Recomended/>
                </div>             
            </div>
                           
        )
    }
}
export default MainScreen;