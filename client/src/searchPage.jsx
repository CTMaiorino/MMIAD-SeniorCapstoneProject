/*
Search Page
Created by: James Jacobson
4/30/2021
Contains the search criteria, selection dropdown, and tools. Used to search for introns, and to send to email
*/


import Dropdowns from "./components/selectionDropdowns";
import SearchCriteria from "./components/searchCriteria";
import SearchCriteriaTools from "./components/tools";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { MultiSelect } from 'primereact/multiselect';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleSpecies = this.handleSpecies.bind(this);
    this.handleVersions = this.handleVersions.bind(this);
    this.handleTypes = this.handleTypes.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }




  referenceData = {
    label: "Reference",
    criteria: [
      "Species",
      "Common Name",
      "Rank",
      "Genome Version",
      "Ensembl Version",
    ],
  }




  geneData = {
    label: "Gene",
    criteria: [
      "Name",
      "NCBI Gene ID",
      "Ensembl Gene ID",
      "Sequence",
      "Coordinates",
      "Length",
      "Strand",
      "Ensembl Transcript ID",
    ],
  };

  intronData = {
    label: "Intron",
    criteria: [
      "Length",
      "Coordinates",
      "Sequence",
      "Type",
      "Subtype",
      "Score",
      "Branch Point Sequence",
      "Acceptor Splice Site",
      "Donor Splice Site",
    ],
  }

  externalData = {
    label: "External",
    criteria: [
      "NCBI Gene Link",
      "Ensembl Gene Link",
      "Transcript Ensembl Link",
      "UCSC Link - Gene",
      "UCSC Link - Intron",
    ],
  }

  fileTypes = {
    types: ["Default", "Exon GTF", "Intron Bed", "Downstream Exon Fasta", "Upstream Exon Fasta"]
  }

  //needed to keep track of the selected species and version, since there is both primereact and react-bootstrap
  //The forms do not work together
  state = {
    selectedSpecies: [],
    selectedVersions: [],
    selectedTypes: [],
    emailIsEmpty: true
  }


  handleSpecies = (species) => {
    this.setState({ selectedSpecies: species, selectedVersions: this.state.selectedVersions, selectedTypes: this.state.selectedTypes, emailIsEmpty: this.state.emailIsEmpty });
  }

  handleVersions = (versions) => {
    this.setState({ selectedSpecies: this.state.selectedSpecies, selectedVersions: versions, selectedTypes: this.state.selectedTypes, emailIsEmpty: this.state.emailIsEmpty });
  }

  handleTypes(event) {
    this.setState({ selectedSpecies: this.state.selectedSpecies, selectedVersions: this.state.selectedVersions, selectedTypes: event.value, emailIsEmpty: this.state.emailIsEmpty });
  }

  handleEmail(event) {
    const isEmpty = event.target.value == ""
    this.setState({ selectedSpecies: this.state.selectedSpecies, selectedVersions: this.state.selectedVersions, selectedTypes: this.state.selectedTypes, emailIsEmpty: isEmpty });
  }





  //Collects the form inputs, and send it the results page, which actually calls the data
  //Handles form validation
  onFormSubmit = (e) => {

    console.log("A submit was hit")
    e.preventDefault();
    const formData = new FormData(e.target)
    var formDataObj = Object.fromEntries(formData.entries());
    formDataObj = { speciesName: this.state.selectedSpecies, genomeVersion: this.state.selectedVersions, ...formDataObj }
    formDataObj.emailFormatOptions = this.state.selectedTypes
    const email = formDataObj.email
    console.log(formDataObj)
    if (formDataObj.speciesName.length == 0) {
      alert("You must select a species and a genome version")
    }
    else if (formDataObj.genomeVersion.length == 0 && formDataObj.speciesName.length == 1) {
      alert("You must select a genome version")
    }
    else if (email.length > 0 && (!email.includes(".") || !email.includes("@") || email.indexOf("@") > email.indexOf("."))) {
      alert("Invalid email")
    }
    else if (email.length > 0 && formDataObj.emailFormatOptions.length == 0) {
      alert("Select at least one file type for your results to be sent by email")
    }
    else {
      var params = formDataObj; // The object containing search parameters


      this.props.history.push({
        pathname: "/results",
        state: {
          data: params
        }
      })
    }

  }

  render() {
    const fileTypes = this.fileTypes.types
    return (

      <div>

        <Header />
        <div className="container-fluid ">
          <Form onSubmit={this.onFormSubmit} >
            <div className="row">
              <div className="col-lg-4 p-auto my-1 ">
                <Dropdowns handleSpecies={this.handleSpecies} handleVersions={this.handleVersions} />
                <SearchCriteria />
              </div>
              <div className="col-lg-8 p-auto my-1">

                <h1 className="my-4 text-center">Filters</h1>
                <SearchCriteriaTools
                  title={this.referenceData.label}
                  criteria={this.referenceData.criteria}
                />
                <SearchCriteriaTools
                  title={this.geneData.label}
                  criteria={this.geneData.criteria}
                />
                <SearchCriteriaTools
                  title={this.intronData.label}
                  criteria={this.intronData.criteria}
                />
                <SearchCriteriaTools
                  title={this.externalData.label}
                  criteria={this.externalData.criteria}
                />

                <div className="d-flex">
                  <Form.Label style={{ fontSize: 22 }} className="m-2">
                    Send Results to Email
              </Form.Label>
                  <Form.Control
                    size="lg"
                    className="col-lg mx-2"
                    name="email"
                    placeholder="Email (Optional)"
                    onChange={this.handleEmail}
                  />


                  <MultiSelect
                    options={this.fileTypes.types}
                    value={this.state.selectedTypes}
                    placeholder="Select Formats"
                    filter={true}
                    onChange={this.handleTypes}
                    className="m-auto"
                    maxSelectedLabels="1"
                    scrollHeight="200px"
                    name="Species"
                    id="speciesSelections"
                  />



                </div>


                <Button
                  className="float-right"
                  size="lg"
                  type="submit"

                >
                  <Image src="searchIcon.jpg" width="20px" />
                  {this.state.emailIsEmpty ? "Search" : "Search and Email"}
                </Button></div>
              <div />
            </div>

          </Form>
        </div>
      </div>
    );
  }
}
export default SearchPage;
