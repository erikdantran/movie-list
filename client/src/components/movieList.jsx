import React from 'react';
import Movie from './movie.jsx';

var MovieList = (props) => {
  return (
    <div className="list">
      {props.movies.map((movie, i) => <Movie key={i} movie={movie.title} />)}
    </div>
  )
};

export default MovieList;