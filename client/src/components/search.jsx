import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = (e) => {
    //Need to come abck and add functionlity that sorts results by best match
    if (event.target.value === '') {
      this.props.searchOver();
    } else {
      this.props.search(event.target.value);
    }
  }


  render() {
    return (
      <div>
        <form >
          <input name="search"  placeholder="Search" onChange={this.handleInput} />
          {/* <button>Go!</button> */}
        </form>
      </div>
    )
  }
}

export default Search;