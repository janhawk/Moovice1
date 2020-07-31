import React from 'react';


class Popular extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: [],
    };
  }

  onClick() {
    fetch("https://api.themoviedb.org/3/movie/550?api_key=87be3fa1b183c85e6672f543408b2516")
    .then(res => res.json())
    .then(json => {
      console.log(json);
      // code
      this.setState({
        movie: json[0].movie,
      })
    });
  }

  render() {
    return (
      <div>popular</div>
    );
  }
}
export default Popular;