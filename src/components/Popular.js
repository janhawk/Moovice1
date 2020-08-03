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
    fetch("https://api.themoviedb.org/3/movie/550?api_key=87be3fa1b183c85e6672f543408b2516")
    .then(res => res.json())
    .then(json => {
      console.log(json);
      // code
      this.setState({
        movies: json.movies,
      })
    });
  }

  render() {
    return (
      <div>
        <Card>
        {this.state.movies}
        </Card>
      </div>
    );
  }
}
export default Popular;