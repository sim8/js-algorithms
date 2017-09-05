import React from "react";

export default class Layout extends React.Component {
  render() {
    return (
      <div id="party">
        <h1>Layout container</h1>
        {this.props.children}
      </div>
    );
  }
}
