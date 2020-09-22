import React, { Component } from 'react';

class UserScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: props._user,
        }
    }
    
    render(){
        const { user } = this.state;

        return(
            <>
                <h1>Welcome {user.name}!</h1>
                <p>{ user.email }</p>
                <img src={user.picture.data.url} height={user.picture.height} width={user.picture.width} alt="avatar"/>
            </>
        );
    }
}

export default UserScreen;