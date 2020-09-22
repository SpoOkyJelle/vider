import React, { Component } from 'react';

import TinderCard from 'react-tinder-card';

class MovieCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: props.db.results,

            //count: 50,
        }
    }
    
    onSwipe = (direction) => {
        //this.setState({ count: this.props.count + 1 });        
    }
      
    onCardLeftScreen = (myIdentifier) => {
        //console.log(myIdentifier + ' left the screen')
    }

    render(){
        const { items } = this.state;
        
        return(
            <div className="cardContainer d-flex justify-content-center mt-5">
                { items.slice(0, 10).map((item) =>
                    <TinderCard key={ item.id } className="swipe" onSwipe={ this.onSwipe } onCardLeftScreen={ () => this.onCardLeftScreen('fooBar') } >
                        <div className='movieCard align-items-center'>
                            <img src={ 'https://image.tmdb.org/t/p/w500/' + item.poster_path } alt="movieImg" />
                        </div>
                    </TinderCard>
                ) }
            </div>
        );
    }
}

export default MovieCard;