import React, { Component } from 'react';

import LoginButton from '../Buttons/LoginButton';
import UserScreen from '../Screens/UserScreen';


class LoginScreen extends Component {
    constructor(props) {
        super();
        this.state = {
        };
    }


    facebookResponse = (response) => { 
        this.setState({
            ...this.state, 
            user: response 
        }) 
    }
     

    render(){
        return (
            <div style={{ margin: "auto", textAlign: "center", paddingTop: "2em" }}>
                { this.state.user ? <UserScreen _user={this.state.user}/> :
                    <LoginButton facebookResponse={this.facebookResponse}/>
                }
            </div>
        );
    }
}

export default LoginScreen;