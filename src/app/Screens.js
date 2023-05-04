import React, { Component } from 'react';
import './TopBar.css';
import MainScreen from './MainScreen';

class Screens extends Component	
{
    state = {activeScreen:0}
    render(){
        if(this.state.activeScreen === 0){
            return(
                <MainScreen/>
            )
        }
    }
}

export default Screens;