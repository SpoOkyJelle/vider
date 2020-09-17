import React, { Component } from 'react';

import Header from './Header';
import DoneButton from './DoneButton';
import WheelPicker from 'react-simple-wheel-picker';

class SelectCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
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
                console.log(result.gengres);
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render(){
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return (
              <React.Fragment>
                <div className="selectCategory">
                    <h2>Select a movie category</h2>
                    <select className="categories">
                        {items.map(item => (
                            <option key={ item.id }>{ item.name }</option>
                        ))}
                    </select>
                </div>
                <DoneButton />
              </React.Fragment>
            );
        }
    }
}

export default SelectCategory;