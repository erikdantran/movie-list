import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      watched: false
    }

  }


  render() {
    return (
      <ul>
        <div className="movie" >{this.props.movie}</div>
      </ul>
    )
  }
}

export default Movie;