import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Multiselect } from 'multiselect-react-dropdown';
class Dropdowns extends Component {
  constructor(props) {
    super(props);
    this.handleSelectSpecies = this.handleSelectSpecies.bind(this);
    console.log()
  }

  state = {
    selectedSpecies: false,
    speciesList: [{ "speciesName": "Test Monkey" }],
    versionList: [{ "version": "Monkey" }],
    selectedValues: [{}]
  };

  async componentDidMount() {
    //Retrives all of the species in the database, and places them into the species selection dropdown
    fetch('https://major-and-minor-intron-db.ue.r.appspot.com/search/species')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          selectedSpecies: this.state.selectedSpecies,
          speciesList: data,
          versionList: this.state.versionList,
          selectedValues: this.state.selectedValues
        })
      })

  }
  handleSelectSpecies(event) {
    //The database retrives the selected species and gets its genome versions
    const version = event.target.value;
    fetch('https://major-and-minor-intron-db.ue.r.appspot.com/search/species/' + version)
      .then(response => response.json())
      .then(data => {
        this.setState({
          selectedSpecies: true,
          speciesList: this.state.speciesList,
          versionList: data,
          selectedValues: this.state.selectedValues
        })
      })
  }
  render() {

    return (
      <div className="my-4 d-flex">
        <Form.Control
          onChange={this.handleSelectSpecies}
          name="speciesName"
          as="select"
          size="lg"
          className="m-auto"
        >
          Species
          <option disabled={this.state.selectedSpecies}>Species</option>
          {Object.values(this.state.speciesList).map((val, k) => (
            <option eventKey={val.speciesName}>{val.speciesName}</option>
          ))}
          ;
        </Form.Control>

        <Multiselect
          options={this.state.speciesList} // Options to display in the dropdown
          selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
          onSelect={this.onSelect} // Function will trigger on select event
          onRemove={this.onRemove} // Function will trigger on remove event
          displayValue="speciesName"
          showCheckbox="true"
          closeOnSelect="false"
           // Property name to display in the dropdown options
        />

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
          {this.state.versionList.map((versionName) => (
            <option eventKey={versionName} onSelect={this.handleEvent}>
              {versionName.genomeVersion}
            </option>
          ))}
          ;
        </Form.Control>
      </div>
    );
  }
}

export default Dropdowns;
