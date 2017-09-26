import React from 'react';
import InlineConsole from 'inline-console';
import * as library from './../library/library';
import * as lh from './../util/library-helpers';


export default class TerminalWrapper extends React.Component {

  componentDidMount() {
    this.initialiseAlgorithm();
  }

  initialiseAlgorithm() {
    let algorithm = this.props.algorithm;
    window[lh.getInstanceName(algorithm.name)] = new library[lh.getClassName(algorithm.name)](...algorithm.testArgs || {});
    console.clear();
    console.log(`    +=${'='.repeat(algorithm.name.length)}=+`);
    console.log(`    | ${algorithm.name.toUpperCase()} |`);
    console.log(`    +=${'='.repeat(algorithm.name.length)}=+`);
    console.log('');
    console.log('A ' + algorithm.name + ' has been initialised ' + (algorithm.testArgs ? 'with mock data ' : '') + 'under \'' + lh.getInstanceName(algorithm.name) + '\'. Click on \'implementation\' to explore available methods or open your DevTools console for more options.');
    console.log('');
  }

  render() {
    return (
      <div className="inline-console">
        <InlineConsole
          redirect={true}
          options={{
            prompt: '>',
            welcome: ''
          }}
        />
      </div>
    );
  }
}
