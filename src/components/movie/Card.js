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
    console.log('this.props', this.props);
    return (
      <div>
        
            <img src={this.props.image} />
             {this.props.title}
            <h2>discription: {this.props.discription}</h2>
      </div>
    );
  }
}
export default Card;