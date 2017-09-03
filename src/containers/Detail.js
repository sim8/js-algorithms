import React from 'react';

export default class Detail extends React.Component {
  constructor(props) {
    super();
  }

  setState() {

  }

  render() {
    return (
      <div>
        {this.props.item.name}
      </div>
    );
  }
}
