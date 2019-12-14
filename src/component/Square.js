import React, { Component } from "react";
import "./Square.css";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleClick = e => {
    this.setState({
      value: "X"
    });
  };
  render() {
    return (
      <button className="square" onClick={e => this.handleClick(e)}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
