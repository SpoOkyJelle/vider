import React, { Component } from 'react';

import logo from '../../img/vider.png';

class SplashScreen extends Component {
    render(){
        return (
            <div className="container header text-center d-flex flex-column align-items-center">
                <img className="w-70" src={ logo } alt="logo" />
                <h4 className="loading-text">Loading...</h4>
            </div>
        )
    }
}

export default SplashScreen;