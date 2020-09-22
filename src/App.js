import React, { Component } from 'react';

import SplashScreen from './components/Screens/SplashScreen';
import HomeScreen from './components/Screens/HomeScreen';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      renderSplashscreen: true,
      data: {},
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