import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input value={this.state.term} onChange={(event) => this.setState({ term: event.target.value })}/>
        </form>
      </div>
    )
  }
}

export default SearchBar;
