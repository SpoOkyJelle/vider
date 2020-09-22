import React, { Component } from 'react';

import MovieCard from '../MovieCard';

class SwipeMoviesScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        let catId = this.props.selectedItem;

        if(catId === '')
            catId = 27;

        fetch("https://api.themoviedb.org/3/discover/movie?api_key=1694b915c570c9520c9f86647cb8e91b&with_genres=" + catId)
            .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            items: result
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

    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <React.Fragment>
                    <MovieCard db={ items } />
                </React.Fragment>
            );
        }
    }
}

export default SwipeMoviesScreen