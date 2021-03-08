import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ResultsTable from "./components/resultsTable";
import BackToSearch from "./components/backToSearch";
import React, { Component } from "react";
import * as Icon from "react-bootstrap-icons";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    console.log(props.location);
  }

  state={
    detail:null
  }
  render() {
    return (
      <div>
        <Header />
        
        <div className="container-fluid ">
          <h2>Results:</h2>
          <Button className="m-2 p-auto float-right" variant="outline-primary">
          <Icon.EnvelopeFill style={{ paddingRight: "5px" }} />
          Email
        </Button>
          <Button className="m-2 p-auto float-right" variant="outline-primary">
          <Icon.ArrowDownCircleFill style={{ paddingRight: "5px" }}  />
          Export
        </Button>
          <ResultsTable introns={this.props.location.state.data} />
          <BackToSearch />
        </div>
      </div>
    );
  }
}

export default SearchResults;
