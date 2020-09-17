import React, { Component } from 'react';
import ReactDOM from 'react';

import SessionButton from './SessionButton';
import SelectCategory from './SelectCategory';

class PopularMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };

        this.hide_overlay = this.hide_overlay.bind(this);
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

    hide_overlay() {
        let popularMovies = document.getElementById("popularMovies");
        popularMovies.innerHTML = '';
    }

    render(){
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
            return (
                <div id="popularMovies" className="d-flex flex-column align-items-center">
                    <h2 className="mt-5">Popular movies:</h2>
                    <div className="movieCard">
                        {items.slice(0, 10).map(item => (
                            <div className="d-flex flex-column align-items-center mt-5" key={item.id}>
                                <img className="w-90" style={{ borderRadius: '15px' }} src={ 'https://image.tmdb.org/t/p/w500/' + item.poster_path} alt={ item.poster_path } />
                            </div>
                        ))}
                    </div>
                    <SessionButton hideOverlay={this.hide_overlay}  />
                </div>
            );
        }
    }
}

export default PopularMovies;