import React from 'react';
import * as library from './../library/library';
import * as lh from './../util/library-helpers'

export default class Detail extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.initialiseAlgorithm();
  }

  initialiseAlgorithm() {
    window[lh.getInstanceName(this.props.item.name)] = new library[lh.getClassName(this.props.item.name)]();
    console.clear();
    console.log(`
      +=${'='.repeat(this.props.item.name.length)}=+
      | ${this.props.item.name.toUpperCase()} |
      +=${'='.repeat(this.props.item.name.length)}=+
    `);
    console.log('A ' + this.props.item.name + ' has been initialised under %c' + lh.getInstanceName(this.props.item.name), "color: blue; font-style: italic;");
  }

  render() {
    return (
      <div>
        {this.props.item.name}
      </div>
    );
  }
}
