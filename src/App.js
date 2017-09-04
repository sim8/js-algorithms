import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import Browse from './containers/Browse';
import Detail from './containers/Detail';
import About from './containers/About';
import { libraryConfig } from './config/library';
import * as lh from './util/library-helpers'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <nav>
            <Link to={'/browse'}>Browse</Link>
            <Link to={'/'}>About</Link>
          </nav>
          <Route path="/detail/:itemKey" render={({ match }) => (
            <Detail item={libraryConfig.find(i => lh.getURLName(i.name) === match.params.itemKey)} />
          )} />
          <Route path="/browse" render={() => (
            <Browse library={libraryConfig} />
          )} />
          <Route exact={true} path="/" component={About} />
        </Layout>
      </Router>
    );
  }
}

export default App;
