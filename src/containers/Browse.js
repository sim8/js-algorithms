import React from 'react';
import { Link } from 'react-router-dom';
import Filters from './../components/Filters';
import AlgorithmStore from './../stores/AlgorithmStore';
import * as lh from './../util/library-helpers'

export default class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithms: AlgorithmStore.getFiltered()
    };
  }

  componentWillMount() {
    AlgorithmStore.on('change', () => {
      this.setState({
        algorithms: AlgorithmStore.getFiltered()
      })
    })
  }

  render() {
    return (
      <div>
        <Filters></Filters>
        <ul>
          {this.state.algorithms.map(item =>
            <Link to={`/detail/${lh.getURLName(item.name)}`} key={lh.getURLName(item.name)}>
              <li >
                {item.name}
              </li>
            </Link>
          )}
        </ul>
      </div>
    );
  }
}
