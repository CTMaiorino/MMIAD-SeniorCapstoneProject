import Dropdowns from "./components/selectionDropdowns";
import SearchCriteria from "./components/searchCriteria";
import SearchCriteriaTools from "./components/tools";
import Header from "./components/header";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import React, { Component } from "react";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleSpecies = this.handleSpecies.bind(this);
    this.handleVersions = this.handleVersions.bind(this);
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


state = {
  selectedSpecies: [],
  selectedVersions: []
}

handleSpecies = (species) => {
  this.setState({selectedSpecies: species , selectedVersions: this.state.selectedVersions });
}

handleVersions = (versions) => {
  this.setState({selectedSpecies: this.state.selectedSpecies , selectedVersions: versions });
}




  // Debugging purposes


  onFormSubmit = (e) => {
    
    e.preventDefault();
    const formData = new FormData(e.target)
    const  formDataObj = Object.fromEntries(formData.entries());
    formDataObj.speciesName="Bos taurus"//this.state.selectedSpecies
    formDataObj.genomeVersion="UMD3.1"//this.state.selectedVersions
    if (formDataObj.speciesName.length==0) {
      alert("You must select a species and a genome version")
    }
    else if(formDataObj.genomeVersion.length==0 && formDataObj.speciesName.length==1)
    {
      alert("You must select a genome version")
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
    return (
      <div>
        
        <Header />
        <div className="container-fluid ">
          <Form onSubmit={this.onFormSubmit} >
            <div className="row">
              <div className="col-lg-4 p-auto my-1 ">
                <Dropdowns handleSpecies={this.handleSpecies} handleVersions={this.handleVersions}/>
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

                <Button
                  className="float-right"
                  size="lg"
                  type="submit"


                >
                  <Image src="searchIcon.jpg" width="20px" />
                  Search
                </Button>

              </div>
              <div />
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export default SearchPage;
