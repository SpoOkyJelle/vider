import React, { Component } from 'react';

class DoneButton extends Component {
    render(){
        return(
            <button onClick={ this.props.doneButton } className="btn btn-done d-flex justify-content-center mb-5">Done</button>
        );
    }
}

export default DoneButton;
