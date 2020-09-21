import React, { Component } from 'react';

import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class SessionButton extends Component {
    render(){
        return (
            <button onClick={ this.props.sessionButtonClick } className="btn btn-session mb-5">Make Session</button>
        );
    }
}

export default SessionButton;