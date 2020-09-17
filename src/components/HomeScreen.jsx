import React, { Component } from 'react';

import Header from './Header';
import PopularMovies from './PopularMovies';
import SelectCategory from './SelectCategory';

class HomeScreen extends Component {
  

  render() {
    return (
      <div className="container header text-center d-flex flex-column align-items-center">
        <Header />
        <SelectCategory />
      </div>
    );
  }
}

export default HomeScreen;