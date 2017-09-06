import React from 'react';
import * as FilterActions from './../actions/FilterActions';


export default class Tag extends React.Component {

  constructor(props) {
    super(props);
    this.toggleTag = this.toggleTag.bind(this);
  }

  toggleTag() {
    FilterActions.toggleTag(this.props.tag.tagWord);
  }

  render() {
    return (
      <span className={(this.props.tag.isActive ? 'active' : '')} onClick={this.toggleTag}>{this.props.tag.tagWord}</span>
    )
  }
}
