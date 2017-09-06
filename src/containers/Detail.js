import React from 'react';
import axios from 'axios';
import * as library from './../library/library';
import * as lh from './../util/library-helpers';
import { appConfig } from './../config/app-config';

export default class Detail extends React.Component {
  constructor(props) {
    super();
    this.spinner = 'Loading...';
  }

  componentDidMount() {
    this.initialiseAlgorithm();
    this.initialiseCode();
  }

  initialiseCode() {
    axios.get(appConfig.filesBaseURL + this.props.item.path).then(response => {
      this.code = response.data;
      window.code = this.code;
    });
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
    console.log('A ' + item.name + ' has been initialised ' + (item.testArgs ? 'with mock data ' : '') + 'under %c' + lh.getInstanceName(item.name), "color: blue; font-style: italic;");
  }

  render() {
    return (
      <div>
        <h1 className="main-title">JS Algorithms <span>/ {this.props.item.name}</span></h1>
        <pre>
          <code>
            {this.code ? this.code : this.spinner}
          </code>
        </pre>
      </div>
    );
  }
}
