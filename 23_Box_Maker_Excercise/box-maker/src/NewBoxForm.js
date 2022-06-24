import React, { Component } from "react";
import { v4 as uuid } from 'uuid';

class NewFormBox extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", backgroundColor: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = {...this.state, id: uuid()}
    this.props.createBox(newBox);
    this.setState({ height: "", width: "", backgroundColor: "" })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height: </label>
          <input
            type="text"
            id="height"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />

          <label htmlFor="width">Width: </label>
          <input
            type="text"
            id="width"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />

          <label htmlFor="backgroundColor">BackgroundColor: </label>
          <input
            type="text"
            id="backgroundColor"
            name="backgroundColor"
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />
        </div>
        <button>Add a new box</button>
      </form>
    );
  }
}

export default NewFormBox;
