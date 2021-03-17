import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.css";
import IntronInfoCollapsable from './components/introInfoCollapsables';
import BackToSearch from "./components/backToSearch";
import React, { Component } from "react";

class DetailedIntronInfo extends Component {
  constructor(props) {
    super(props);
    console.log(props);

  }

  state = {
    intron: {}
  }

  async componentDidMount() {

    var link = window.location.href
    const intronId = link.split("/").pop();
    console.log(intronId);
    fetch('https://major-and-minor-intron-db.ue.r.appspot.com/search/intron/' + intronId)
      .then(response => response.json())
      .then(data => {
        this.setState({ intron: data })
      })

  }

  basicData = {
    label: "Basic",
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
  }

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
  };

  externalData = {
    label: "External",
    criteria: [
      "NCBI Gene Link",
      "Ensembl Gene Link",
      "Transcript Ensembl Link",
      "UCSC Link - Gene",
      "UCSC Link - Intron",
    ],
  };









  render() {
    return (
      <div>
        <Header />
        <div className="mt-3"><BackToSearch /></div>

        <div className="container-fluid ">
          <IntronInfoCollapsable title={this.basicData.label} criteria={this.basicData.criteria} intron={this.state.intron} />
          <IntronInfoCollapsable title={this.geneData.label} criteria={this.geneData.criteria} intron={this.state.intron} />
          <IntronInfoCollapsable title={this.intronData.label} criteria={this.intronData.criteria} intron={this.state.intron} />
          <IntronInfoCollapsable title={this.externalData.label} criteria={this.externalData.criteria} intron={this.state.intron} />
        </div>
      </div>

    )
  }
}
export default DetailedIntronInfo;
