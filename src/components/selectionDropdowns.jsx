import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
class Dropdowns extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { activeSpecies: "Species" };
  }

  state = {
    activeSpecies: "Species",
  };

  handleSelect = (e) => {
    this.setState({ activeSpecies: e });
  };

  render() {
    return (
      <div className="my-4 d-flex">
        <Dropdown onSelect={this.handleSelect} className="m-auto">
          <Dropdown.Toggle variant="secondary">
            {this.state.activeSpecies}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {this.props.species.map((speciesName) => (
              <Dropdown.Item eventKey={speciesName}>
                {speciesName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="m-auto">
          <Dropdown.Toggle variant="secondary">Version</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Version 1</Dropdown.Item>
            <Dropdown.Item>Version 2</Dropdown.Item>
            <Dropdown.Item>Version 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
export default Dropdowns;
