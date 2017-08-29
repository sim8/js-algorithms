import React from 'react';
// import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from './containers/Layout';
import Browse from './containers/Browse';
import About from './containers/About';
import './App.css';

function App() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Browse}></IndexRoute>
        <Route path="about" component={About}></Route>
      </Route>
    </Router>
  );
}

export default App;
