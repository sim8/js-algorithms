import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={`/detail/${item.key}`} key={item.key}>
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
