import React, { Component } from 'react';

import DoneButton from './DoneButton';
import SwipeMovies from './SwipeMovies';

class SelectCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          selectedItem: '',
          isClicked: false,
        };
      }
    
    async componentDidMount() {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=1694b915c570c9520c9f86647cb8e91b")
        .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.genres
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

    doneButtonClicked = () => {
        this.setState({ isClicked: true });
    }

    render(){
        const { error, isLoaded, items, isClicked, selectedItem } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            if(!isClicked){
                return(
                    <React.Fragment>
                    <div className="selectCategory">
                        <h2>Select a movie category</h2>
                        <select className="categories" 
                            onChange={ (e) => this.setState({ selectedItem: e.target.value }) }
                            >
    
                            {items.map(item => (
                                <option value={ item.id } key={ item.id }>{ item.name }</option>
                            ))}
    
                        </select>
                    </div>
                    <DoneButton doneButton={ this.doneButtonClicked } />
                    </React.Fragment>
                );
            }
            else{
                return (
                    <SwipeMovies selectedItem={ selectedItem } />
                );
            }
        }
    }
}

export default SelectCategory;