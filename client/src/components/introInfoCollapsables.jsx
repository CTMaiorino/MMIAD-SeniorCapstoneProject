import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Collapse from "react-bootstrap/Collapse";
class IntronInfoCollapsable extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    open:true
  };

  render() {
    const { open } = this.state;
    return (
      <div className="border m-5">
        <div className="border border-dark d-flex p-4">
          <Button
            variant="light"
            className="m-1 p-2"
            size="small"
            onClick={() => this.setState({ open: !open })}
            aria-controls="tool"
            aria-expanded={this.state.open}
          >
            <Image
              src={'/icon.png'}
              width="30px"
              alt={this.state.isVisible === true ? "Hide" : "Show"}
            />
          </Button>
          <h2 className="m-2">{this.props.title}</h2>
        </div>
        <div aria-controls="tool">
        <Collapse in={open}>
          <div>
            {this.props.criteria.map((item) => (
              <div className="m-4 d-flex justify-content-between">
              <h5 >
                {item}
              </h5>
              <span className="">result</span>
              
              </div>
              
            ))}
            </div>
          </Collapse>
        </div>
      </div>
    )}
}
export default IntronInfoCollapsable;
