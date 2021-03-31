
import React, { Component } from "react";
import { Link } from 'react-router-dom';




class ResultsTableRow extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        intron: this.props.intron,
        intronId: this.props.intron.intronNumId, //Temp. will be replace with props.intron.intronid once the search route contains that data
        intronPath: "results/details/" + this.props.intron.intronNumId
    };
    
    render() {
        return (



            <tr>
                <td><Link to={{ pathname:this.state.intronPath, state:this.state.intron}}>{this.state.intron.genomeVersion}</Link></td>
                <td>{this.state.intron.speciesName}</td>
                <td>{this.state.intron.ensemblGeneId}</td>
                <td>{this.state.intron.geneType}</td>
                <td>{this.state.intron.subtype}</td>
                <td>{this.state.intron.chromosome}</td>
                <td>{this.state.intron.intronStartCoord}</td>
                <td>{this.state.intron.intronEndCoord}</td>


            </tr>


        )
    }
}

export default ResultsTableRow;










