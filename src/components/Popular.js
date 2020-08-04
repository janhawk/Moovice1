import React from 'react';
import Card from './movie/Card';

class Popular extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=87be3fa1b183c85e6672f543408b2516';
    
    fetch(url)
    .then(res => res.json())
    .then(data => {

      const movies = data.results;
      console.log(data);
      // code
      this.setState({
        movies: data.results
      })
    });
  }

  render() {
    if (this.state.movies.length ===0) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <div>
        <h1>popular</h1>
        <div>
        {this.state.movies.map((movie) => {
          return (
            <Card
            
            {...movie}
              // title = {movie.title}
              // poster_path = {movie.poster_path}
            /> 
            
          );
        })}
       
        </div>
      </div>
    );
  }
}
export default Popular;