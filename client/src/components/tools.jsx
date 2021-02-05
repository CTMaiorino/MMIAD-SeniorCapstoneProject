import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Collapse from "react-bootstrap/Collapse";

class SearchCriteriaTools extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    open: true, // The whole component is visible by default
  };
  // The visibility of the whole component is updated here (visible by default)

  render() {
    const { open } = this.state;
    return (
      <div className="border m-2">
        <div className="border border-dark d-flex p-3">
          <Button
            variant="light"
            className="m-1 p-2"
            size="small"
            onClick={() => this.setState({ open: !open })}
            aria-controls="tool"
            aria-expanded={this.state.open}
          >
            <Image
              src="icon.png"
              width="30px"
              alt={this.state.isVisible === true ? "Hide" : "Show"}
            />
          </Button>
          <h2 className="m-2">{this.props.title}</h2>
        </div>
        <div aria-controls="tool">
          <Collapse in={open}>
            <Form.Group>
              {this.props.criteria.map((item) => (
                <Form.Check
                  className="m-2"
                  style={{ fontSize: 22 }}
                  inline
                  label={item}
                  value={true}
                  name={item + "From" + this.props.title}
                />
              ))}
            </Form.Group>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default SearchCriteriaTools;
