import React, { Component } from 'react';

import SessionButton from './Buttons/SessionButton';
import SelectCategory from './SelectCategory';

class PopularMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isClicked: false,
      items: []
    };

    this.isSessionButtonClicked = this.isSessionButtonClicked.bind(this);
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=1694b915c570c9520c9f86647cb8e91b")
      .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.results
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
  }

  isSessionButtonClicked() {
    this.setState({ isClicked: true });
  }

  render(){
    const { error, isLoaded, items, isClicked } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      if(!isClicked){
        return(
          <div id="popularMovies" className="d-flex flex-column align-items-center">
            <h2 className="mt-5">Popular movies:</h2>
            <div className="movieCard">
                {items.slice(0, 10).map(item => (
                  <div className="d-flex flex-column align-items-center mt-5" key={item.id}>
                    <img className="w-90" style={{ borderRadius: '15px' }} src={ 'https://image.tmdb.org/t/p/w500/' + item.poster_path} alt={ item.poster_path } />
                  </div>
                ))}
            </div>
            <SessionButton sessionButtonClick={this.isSessionButtonClicked}  />
          </div>
        );
      }
      else{
        return <SelectCategory />
      }          
    }
  }
}

export default PopularMovies;