import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.css";
import IntronInfoCollapsable from './components/introInfoCollapsables';
import BackToSearch from "./components/backToSearch";
import React, { Component } from "react";

class DetailedIntronInfo extends Component {
  constructor(props) {
    super(props);
  }

  

  state = {
    intron: this.props.location.state
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

    keys: [
      "speciesName",
      "commonName",
      "rank",
      "genomeVersion",
      "ensemblVersion"
    ]
  }

  geneData = {
    label: "Gene",
    criteria: [
      "Name",
      "NCBI Gene ID",
      "Ensembl Gene ID",
      "Sequence",
      "Start Coordinate",
      "End Coordinate",
      "Length",
      "Strand",
      "Ensembl Transcript ID",
    ],

    keys: [
      "geneName",
      "ncbiGeneId",
      "ensemblGeneId",
      "geneSequence",
      "geneStartCoord",
      "geneEndCoord",
      "geneLength",
      "strand",
      "transcriptomeId"
    ]
  }

  intronData = {
    label: "Intron",
    criteria: [
      "Length",
      "Start Coordinate",
      "End Coordinate",
      "Sequence",
      "Type",
      "Subtype",
      "Score",
      "Branch Point Sequence",
      "Acceptor Splice Site",
      "Donor Splice Site",
    ],

    keys: [
      "intronLength",
      "intronStartCoord",
      "intronEndCoord",
      "intronSequence",
      "intronType",
      "subtype",
      "overallScore",
      "branchPoint",
      "acceptorSpliceSite",
      "donorSpliceSite"
    ]


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

    keys: [
      "ncbiGeneLink",
      "ensemblGeneLink",
      "transcriptomeEnsemblLink",
      "geneUcscLink",
      "ucscLink"
    ]
  };









  render() {
    return (
      <div className="overflow-hidden">
        <Header />
        <div className="mt-3 "><BackToSearch /></div>

        <div className="container-fluid  ">
          <IntronInfoCollapsable title={this.basicData.label} criteria={this.basicData.criteria} dataKeys={this.basicData.keys} intron={this.state.intron} />
          <IntronInfoCollapsable title={this.geneData.label} criteria={this.geneData.criteria} dataKeys={this.geneData.keys} intron={this.state.intron} />
          <IntronInfoCollapsable title={this.intronData.label} criteria={this.intronData.criteria} dataKeys={this.intronData.keys} intron={this.state.intron}/>
          <IntronInfoCollapsable title={this.externalData.label} criteria={this.externalData.criteria} dataKeys={this.externalData.keys} intron={this.state.intron} />
        </div>
      </div>

    )
  }
}
export default DetailedIntronInfo;
