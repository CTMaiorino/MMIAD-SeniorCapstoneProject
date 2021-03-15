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
    console.log(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
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
    params: "Test Param"
  }

  



  // Debugging purposes


  onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);

    var params = formDataObj; // The object containing search parameters
    var species = params.species
    var version = params.version
    fetch("https://major-and-minor-intron-db.ue.r.appspot.com/search/species/" + species + "/" + version)
    .then(response => response.json())
      .then(intron => {
        this.props.history.push({
          pathname: "/results",
          state: {
            data: intron
          }
        })
        })
      


    

  }

  //




  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid ">
          <Form onSubmit={this.onFormSubmit}>
            <div className="row">
              <div className="col-lg-4 p-auto my-5 ">
                <Dropdowns />
                <SearchCriteria />
              </div>
              <div className="col-lg-8 p-auto my-5">
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
