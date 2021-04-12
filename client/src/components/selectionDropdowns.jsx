import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { MultiSelect } from 'primereact/multiselect';

class Dropdowns extends Component {
  constructor(props) {
    super(props);
    this.handleSelectSpecies = this.handleSelectSpecies.bind(this);
    this.handleSelectVersions = this.handleSelectVersions.bind(this);
  }

  state = {
    allData: [{}],
    speciesList: [{ "speciesName": "Test Monkey" }],
    versionList: [{ "version": "Monkey" }],
    selectedSpecies: [],
    selectedVersions: [],
  };

  async componentDidMount() {
    //Retrives all of the species in the database, and places them into the species selection dropdown
    fetch('https://major-and-minor-intron-db.ue.r.appspot.com/search/species')
      .then(response => response.json())
      .then(data => {
        var speciesList = []
        var versionsList = []
        data.forEach(entry => {
          if (!speciesList.includes(entry.speciesName)) {
            speciesList.push(entry.speciesName)
          }
          if (!versionsList.includes(entry.genomeVersion)) {
            versionsList.push(entry.genomeVersion)
          }
        })
        this.setState({
          allData: data,
          speciesList: speciesList,
          versionList: versionsList,
          selectedSpecies: this.state.selectedSpecies,
          selectedVersions: this.state.selectedVersions
        })
      })

  }
  handleSelectSpecies(event) {
    //The database retrives the selected species and gets its genome versions
    const selectedSpecies = event.value;
    const filteredVersions = [];
    if (selectedSpecies.length == 1) {
      this.state.allData.forEach(entry => {
        if (entry.speciesName == selectedSpecies) {
          filteredVersions.push(entry.genomeVersion)
        }
      });
    }
    this.setState({
      allData: this.state.allData,
      speciesList: this.state.speciesList,
      versionList: filteredVersions,
      selectedSpecies: selectedSpecies,
      selectedVersions: []
    })
    this.props.handleSpecies(selectedSpecies);
    
  }

  handleSelectVersions(event) {
    //The database retrives the selected species and gets its genome versions
    const selectedVersions = event.value;
    this.setState({
      allData: this.state.allData,
      speciesList: this.state.speciesList,
      versionList: this.state.versionList,
      selectedSpecies: this.state.selectedSpecies,
      selectedVersions: selectedVersions
    })
    this.props.handleVersions(selectedVersions);
  }
  render() {

    return (
      <div className="my-4 d-flex">


       
          <MultiSelect
            options={this.state.speciesList}
            value={this.state.selectedSpecies}
            onChange={this.handleSelectSpecies}
            placeholder="Select Species"
            filter={true}
            className="m-auto"
            maxSelectedLabels="1"
            scrollHeight="500px"
            name="Species"
            id="speciesSelections"
          />

          <MultiSelect
            options={this.state.versionList}
            value={this.state.selectedVersions}
            onChange={this.handleSelectVersions}
            placeholder="Select Version"
            filter={true}
            className="m-auto"
            maxSelectedLabels="1"
            scrollHeight="500px"
            disabled={this.state.selectedSpecies.length != 1}
            name="Versions"
            id="versionSelections"
          />
        

      </div>
    );
  }
}

export default Dropdowns;
