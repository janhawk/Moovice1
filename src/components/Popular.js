import React from 'react';
import Card from './movie/Card';

class Popular extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const url = "https://api.themoviedb.org/3/popular"
    fetch("url")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // code
      this.setState({
        movies
      })
    });
  }

  render() {
    return (
      <div>
        <h1>popular</h1>
        <div>
        {this.state.movies.map((movie) => {
          return (
            <div>
              {movie.title}
            </div> 
            
          );
        })}
        {/* <Card
        
        image={"https://image.tmdb.org/t/p/w300/" + movies.poster_path}
        /> */}
        </div>
      </div>
    );
  }
}
export default Popular;