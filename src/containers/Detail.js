import React from 'react';
import InlineConsole from 'inline-console';
import * as library from './../library/library';
import * as lh from './../util/library-helpers';
import CodeStore from './../stores/CodeStore';
import * as CodeActions from './../actions/CodeActions';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

export default class Detail extends React.Component {
  constructor(props) {
    super();
    this.getCode = this.getCode.bind(this);
    this.spinner = 'Loading...';
  }

  componentWillMount() {
    CodeStore.on('fetched', this.getCode);
    CodeActions.fetchCode(this.props.item.path);
    console.log(this.props.path);
  }

  componentDidMount() {
    this.initialiseAlgorithm();
  }

  componentWillUnmount() {
    CodeStore.removeListener('fetched', this.getCode);
  }

  getCode() {
    this.setState({
      code: CodeStore.getCode(this.props.item.path)
    })
  }

  initialiseAlgorithm() {
    let item = this.props.item;
    window[lh.getInstanceName(item.name)] = new library[lh.getClassName(item.name)](...item.testArgs || {});
    console.clear();
    console.log(`    +=${'='.repeat(item.name.length)}=+`);
    console.log(`    | ${item.name.toUpperCase()} |`);
    console.log(`    +=${'='.repeat(item.name.length)}=+`);
    console.log('');
    console.log('A ' + item.name + ' has been initialised ' + (item.testArgs ? 'with mock data ' : '') + 'under \'' + lh.getInstanceName(item.name) + '\'. Please click on \'implementation\' to explore available methods or open your DevTools console for more options.');
    console.log('');
  }

  render() {
    return (
      <div>
        <h1 className="main-title">JS Algorithms <span>/ {this.props.item.name}</span></h1>
        <nav className="secondary-nav">
          <NavLink activeClassName="active" to={`${this.props.path}/terminal`}>Terminal</NavLink>
          <NavLink activeClassName="active" to={`${this.props.path}/implementation`}>Implementation</NavLink>
        </nav>
        <Route path={`${this.props.path}/terminal`} render={() => (
          <div className="inline-console">
            <InlineConsole
              redirect={true}
              options={{prompt: '>', welcome: ''}}
            />
          </div>
        )} />
        <Route path={`${this.props.path}/implementation`} render={() => (
          <pre>
            <code>
              {this.state && this.state.code ? this.state.code : this.spinner}
            </code>
          </pre>
        )} />

      </div>
    );
  }
}
