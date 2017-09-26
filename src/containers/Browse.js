import React from 'react';
import { Link } from 'react-router-dom';
import Filters from './../components/Filters';
import AlgorithmStore from './../stores/AlgorithmStore';
import * as lh from './../util/library-helpers'

export default class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.getAlgorithms = this.getAlgorithms.bind(this);
    this.state = {
      algorithms: AlgorithmStore.getFiltered()
    };
  }

  componentWillMount() {
    AlgorithmStore.on('change', this.getAlgorithms);
  }

  componentWillUnmount() {
    AlgorithmStore.removeListener('change', this.getAlgorithms);
  }

  getAlgorithms() {
    this.setState({
      algorithms: AlgorithmStore.getFiltered()
    })
  }

  render() {
    return (
      <div>
        <h1 className="main-title">JS Algorithms <span>/ Browse</span></h1>
        <Filters></Filters>
        <ul className="algorithm-selection">
          {this.state.algorithms.map(item =>
            <li key={lh.getURLName(item.name)}>
              <Link to={`/detail/${lh.getURLName(item.name)}/terminal`}>
                <div>
                  <p>
                    {item.name}
                  </p>
                </div>
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
