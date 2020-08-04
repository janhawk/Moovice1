import React from 'react';

import './Component.css'

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          image: [],
          title: '',
          discription: '',
        };
      }
    
  render() {
    const picture = `https://image.tmdb.org/t/p/w300${this.props.poster_path}`;
    console.log('this.props', this.props);
    return (
      <div>
        
            <img src={picture} alt ={`movie ${this.props.title}`} />
            {this.props.title}
            {this.props.discription}
            {/* <button
              className='btn'
                onClick={onClick}>
                  {chikdren}
                  <img src ={picture} alt = {`Movie ${title}`} />
              </button> */}
      </div>
    );
  }
}
export default Card;