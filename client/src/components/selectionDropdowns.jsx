import React, { Component } from "react";
import Form from "react-bootstrap/Form";
class Dropdowns extends Component {
  constructor(props) {
    super(props);
    this.handleSelectSpecies = this.handleSelectSpecies.bind(this);

  }

  state = {
    selectedSpecies: false,
    selectedVersion: true,
    speciesData: [{"speciesName":"Monkey"}]
  };

  handleSelectSpecies(event) {
    this.setState({
      selectedSpecies: true,
      selectedVersion: this.state.selectedVersion,
      speciesData: this.state.speciesData
    });
  }
 async componentDidMount() {
    fetch('http://localhost:5000/search/species')
      .then(response => response.json())
      .then(data => { 
        this.setState({
          selectedSpecies: this.state.selectedSpecies,
          selectedVersion: this.state.selectedVersion,
          speciesData: data
        })
      })
      
  }
  render() {
    return (
      <div className="my-4 d-flex">
        <Form.Control
          onChange={this.handleSelectSpecies}
          name="species"
          as="select"
          size="lg"
          className="m-auto"
        >
          Species
          <option disabled={this.state.selectedSpecies}>Species</option>
          {Object.values(this.state.speciesData).map((val,k) => (
            <option eventKey={val.speciesName}>{val.speciesName}</option>
          ))}
          ;
        </Form.Control>

        <Form.Control
          disabled={!this.state.selectedSpecies}
          onChange={this.handleSelect}
          name="version"
          as="select"
          size="lg"
          className="m-auto"
        >
          Species
          <option disabled={this.state.selectedSpecies}>Version</option>
          {this.props.species.map((speciesName) => (
            <option eventKey={speciesName} onSelect={this.handleEvent}>
              {speciesName.speciesName}
            </option>
          ))}
          ;
        </Form.Control>
      </div>
    );
  }
}

export default Dropdowns;
