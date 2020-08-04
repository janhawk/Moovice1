import React from 'react';
import Card from './movie/Card';

class PopularBattle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      key: [],
      currentPage: 1,
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

  onclick = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
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
          <h1>PopularBattle</h1>
            <div className="row">
              
                {this.state.movies.slice(0 + (this.state.currentPage - 1) * 2, 2 + (this.state.currentPage - 1) * 2).map((movie) => {
                  return (
                    <Card 
                  
                      {...movie}
                      discription={movie.discription}
                      // title = {movie.title}
                      // poster_path = {movie.poster_path}
                      
                      onclickFn={() => {                
                      this.onclick(movie.id)
                  }}/>
                        )
                  })}
          
            </div>
      </div>
    );
  }
}

export default PopularBattle;