import React from 'react';
import CodeStore from './../stores/CodeStore';
import TerminalWrapper from './../components/TerminalWrapper';
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
    CodeActions.fetchCode(this.props.algorithm.path);
  }

  componentWillUnmount() {
    CodeStore.removeListener('fetched', this.getCode);
  }

  getCode() {
    this.setState({
      code: CodeStore.getCode(this.props.algorithm.path)
    })
  }

  render() {
    return (
      <div>
        <h1 className="main-title">JS Algorithms <span>/ {this.props.algorithm.name}</span></h1>
        <nav className="secondary-nav">
          <NavLink activeClassName="active" to={`${this.props.path}/terminal`}>Terminal</NavLink>
          <NavLink activeClassName="active" to={`${this.props.path}/implementation`}>Implementation</NavLink>
        </nav>
        <Route path={`${this.props.path}/terminal`} render={() => (
          <TerminalWrapper algorithm={this.props.algorithm} />
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
