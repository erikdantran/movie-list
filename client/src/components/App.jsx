import axios from 'axios';
import React from 'react';
import MovieList from './movieList.jsx';
import Search from './search.jsx';
import AddMovie from './addMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: null,

      searching: false,
      searchResults: null,
      noMovies: false,

      watched: [],
      displayWatched: false
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleFinishSearch = this.handleFinishSearch.bind(this)
    this.getData = this.getData.bind(this); // may not need to bind this
    this.postData = this.postData.bind(this);
    this.addToWatched = this.addToWatched.bind(this);
    }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    axios.get('http://localhost:3000/movies')
      .then((results) => {
        this.setState({ movies: results.data });
      })
  }

  postData = (data) => {
    axios.post('http://localhost:3000/movies', data)
      .then((results) => {
        this.getData()
      })
  }

  handleSearch = (q) => {
    var queryResults = this.state.movies.filter(movie => movie.title.includes(q));
    if (queryResults.length === 0) { this.setState({ noMovies: true }) }
    this.setState({
      searching: true,
      searchResults: queryResults
    })
  }

  handleFinishSearch = () => {
    this.setState({
      searching: false,
      searchResults: null,
      noMovies: false
    })
  }

  addToWatched = (data) => {
    this.setState({watched: [...this.state.watched, data]})
  };

  removefromWatched = (data) => {
    this.setState({watched: this.state.watched.filter((movie) => {
      return movie !== data;
    })})
  }

  render() {

    return (
      <div className="main">
        <h2>Movie List</h2>
        <AddMovie add={this.postData} />
        <Search search={this.handleSearch} searchOver={this.handleFinishSearch} />
        {this.state.noMovies ? <span>No movies found</span> : null}

        {this.state.movies === null ? null :
          this.state.searching ? <MovieList movies={this.state.searchResults} /> : <MovieList movies={this.state.movies} />}

      </div>
    )
  }
}

export default App;