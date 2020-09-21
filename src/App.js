import React, { Component } from 'react';
// import io from 'socket.io-client';

import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//const socket = io.connect('192.168.2.114:4000');

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      renderSplashscreen: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({renderSplashscreen: false});
    }, 500);
  }


  render(){
    if(this.state.renderSplashscreen)
      return <SplashScreen/>;
    else
      return <HomeScreen />
  }
}

export default App;