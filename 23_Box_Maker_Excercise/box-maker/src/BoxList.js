import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.create = this.create.bind(this);
  }
  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }
  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox]
    });
  }
  render() {
    const boxes = this.state.boxes.map(box => (
      <Box
        key={box.id}
        //we cannot access the key.  Key is for interenal react use only so we can't just grab the key from this component thats why we have another property id 
        id={box.id}
        width={box.width}
        height={box.height}
        color={box.backgroundColor}
        removeBox={() => this.remove(box.id)}
        //we could bind it in constructor ar arrow function for variety done here
      />
    ));
    return (
      <div>
        <h1>Color Box Maker Thingy</h1>
        <NewBoxForm createBox={this.create} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;