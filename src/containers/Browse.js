import React from 'react';
import { Link } from 'react-router-dom';
import * as lh from './../util/library-helpers'

export default class Browse extends React.Component {
  constructor(props) {
    super(props);
    window.pips = props;
  }

  render() {
    return (
      <div>Browse
        <ul>
          {this.props.library.map(item =>
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
