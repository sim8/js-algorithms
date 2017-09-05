import React from 'react';
import * as FilterActions from './../actions/FilterActions';
export default class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  setSearch(event) {
    FilterActions.setSearchString(event.target.value);
  }

  render() {
    return (
      <div className="filters">
        <input type="text" onChange={this.setSearch} placeholder="search..." />
      </div>
    );
  }
}
