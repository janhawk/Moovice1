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
    return (
      <div>
            <p>image</p>
            <h1>title: {this.props.title}</h1>
            <h2>discription: {this.props.discription}</h2>
      </div>
    );
  }
}
export default Card;