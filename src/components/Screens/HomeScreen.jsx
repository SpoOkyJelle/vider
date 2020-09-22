import React, { Component } from 'react';

import Header from '../Header';
import PopularMovies from '../PopularMovies';

class HomeScreen extends Component {
  render() {
    return (
      <div className="container header text-center d-flex flex-column align-items-center">
        <Header />
        <PopularMovies />
      </div>
    );
  }
}

export default HomeScreen;