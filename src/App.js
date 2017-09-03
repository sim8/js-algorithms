import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import Browse from './containers/Browse';
import Detail from './containers/Detail';
import About from './containers/About';
import { library } from './config/library';

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
            <Detail item={library.find(i => i.key === match.params.itemKey)} />
          )} />
          <Route path="/browse" render={() => (
            <Browse library={library} />
          )} />
          <Route exact={true} path="/" component={About} />
        </Layout>
      </Router>
    );
  }
}

export default App;
