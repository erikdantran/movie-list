import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (event) => {
    var data = {title: this.state.value}
    this.props.add(data);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="Add movie title here"/>
          <button>Add movie!</button>
        </form>
      </div>
    )
  }
}


export default AddMovie;