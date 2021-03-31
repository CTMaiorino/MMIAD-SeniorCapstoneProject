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

  }

  state = {
    results: [],
    loading: "Loading..."
  }

  componentDidMount() {
    var formData = this.props.location.state.data
    console.log(formData)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(formData)
    };
    fetch('https://major-and-minor-intron-db.ue.r.appspot.com/search/', requestOptions)
      .then(response => response.json())
      .then(data =>{
        if(data[0].length!=0)
        {
        this.setState({
          results: data[0]
        })}
        else
        {
          this.setState({
            loading: "No results found"
          })}
        }

      )

  }

  render() {
    const introns = this.state.results
    const isEmpty = introns.length == 0
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
            <Icon.ArrowDownCircleFill style={{ paddingRight: "5px" }} />
          Export
        </Button>
          <BackToSearch />

          {isEmpty ?
                    (
                      <h2>{this.state.loading}</h2>
                    ) :
                    (
                      <ResultsTable introns = {this.state.results} />
                    )}
        </div>
      </div>
    );
  }
}

export default SearchResults;
