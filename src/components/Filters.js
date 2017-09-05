import React from 'react';
import * as FilterActions from './../actions/FilterActions';
import AlgorithmStore from './../stores/AlgorithmStore';
import Tag from './Tag';


export default class Filters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: AlgorithmStore.getTags()
    };
  }

  setSearch(event) {
    FilterActions.setSearchString(event.target.value);
  }

  render() {
    return (
      <div className="filters">
        <input type="text" onChange={this.setSearch} placeholder="search..." />
        <div className="tags">
          {this.state.tags.map(tag =>
            <Tag key={tag.tagWord} tag={tag}></Tag>
          )}
        </div>
      </div>
    );
  }
}
