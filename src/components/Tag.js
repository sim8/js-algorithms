import React from 'react';
import * as FilterActions from './../actions/FilterActions';


export default class Tag extends React.Component {

  toggleTag = () => {
    FilterActions.toggleTag(this.props.tag.tagWord);
  }

  render() {
    return (
      <span onClick={this.toggleTag}>{this.props.tag.tagWord}</span>
    )
  }
}
