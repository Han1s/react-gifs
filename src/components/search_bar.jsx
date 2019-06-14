import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render () {
    return (
      <input type="text" className="form-search form-control" onChange={this.handleChange} defaultValue="good boy" />
    );
  }
}

export default SearchBar;
