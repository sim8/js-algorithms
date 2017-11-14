import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, NavLink, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import Browse from './containers/Browse';
import Detail from './containers/Detail';
import About from './containers/About';
import { libraryConfig } from './config/library-config';
import * as lh from './util/library-helpers';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="js-algorithms">
        <Layout>
          <nav className="main-nav">
            <NavLink activeClassName="active" exact to={'/'}>Browse</NavLink>
            <NavLink activeClassName="active" to={'/about'}>About</NavLink>
          </nav>
          <Route path="/detail/:itemKey/" render={({ match }) => (
            <Detail path={match.url} algorithm={libraryConfig.find(i => lh.getURLName(i.name) === match.params.itemKey)} />
          )} />
          <Route exact path="/" render={() => (
            <Browse library={libraryConfig} />
          )} />
          <Route path="/about" component={About} />
        </Layout>
      </Router>
    );
  }
}

export default App;
