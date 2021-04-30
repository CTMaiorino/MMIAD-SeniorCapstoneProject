/*
Results Table Row
Created by: James Jacobson
4/30/2021
A row in the results table that contains some of an introns info
*/
import React, { Component } from "react";
import { Link } from 'react-router-dom';




class ResultsTableRow extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        intron: this.props.intron,
        intronId: this.props.intron.intronNumId, 
        intronPath: "results/details/" + this.props.intron.intronNumId //On the click of the link, send it to a address based on an introns data
    };
    
    render() {
        return (


            /* these are the pieces of intron data we want*/
            <tr>
                <td><Link to={{ pathname:this.state.intronPath, state:this.state.intron}}>{this.state.intron.genomeVersion}</Link></td>
                <td>{this.state.intron.speciesName}</td>
                <td>{this.state.intron.transcriptomeId}</td>
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










