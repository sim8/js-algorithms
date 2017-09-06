import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h1 className="main-title">JS Algorithms <span>/ About</span></h1>
        <p>This site features Javascript implementations of some of the foundational algorithms and data-structures.</p>
        <p>The UI is built with React.js and flux.</p>
        <p>Github: <a href="https://github.com/simlees/js-algorithms">https://github.com/simlees/js-algorithms</a></p>
      </div>
    );
  }
}
