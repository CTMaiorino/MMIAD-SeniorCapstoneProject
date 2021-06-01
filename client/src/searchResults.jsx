/*
Search Results Page
Created by: James Jacobson
4/30/2021
Displays the search results, calls the search query
*/

import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.css";
import ResultsTable from "./components/resultsTable";
import BackToSearch from "./components/backToSearch";
import React, { Component } from "react";
import ExportButtons from "./components/exportButtons";

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
        console.log(data)
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
          <ExportButtons introns={this.state.results}/>
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
