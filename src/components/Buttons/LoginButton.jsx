import React, { Component } from 'react';

import FacebookLogin from 'react-facebook-login';


const componentClicked = () => {
    console.log( "Clicked!" )
}
  
  

class LoginButton extends Component {
    render(){
        return(
            <FacebookLogin
            appId="1825775437799347"
            // autoLoad
            fields="name,email,picture"
            onClick={componentClicked}
            callback={this.props.facebookResponse}
            icon="fa-facebook"/>
        );
    }
}

export default LoginButton;
