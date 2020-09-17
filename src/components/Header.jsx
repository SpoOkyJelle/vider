import React, { Component } from 'react';

import userIcon from '../img/user-icon.png';
import scannerIcon from '../img/qrscanner.png';

class Header extends Component {
    render(){
        return (
            <div className="container mt-4 w-100">
                <img className="float-left" src={ scannerIcon } alt="scannerImg" />
                <img className="float-right" src={ userIcon } alt="userImg" />
            </div>
        )
    }
}

export default Header;