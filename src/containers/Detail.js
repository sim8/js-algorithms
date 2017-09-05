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
    let item = this.props.item;
    window[lh.getInstanceName(item.name)] = new library[lh.getClassName(item.name)](...item.testArgs || {});
    console.clear();
    console.log(`
      +=${'='.repeat(item.name.length)}=+
      | ${item.name.toUpperCase()} |
      +=${'='.repeat(item.name.length)}=+
    `);
    console.log('A ' + item.name + ' has been initialised under %c' + lh.getInstanceName(item.name), "color: blue; font-style: italic;");
  }

  render() {
    return (
      <div>
        {this.props.item.name}
      </div>
    );
  }
}
