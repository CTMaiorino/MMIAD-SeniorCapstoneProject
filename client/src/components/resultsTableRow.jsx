
import React, { Component } from "react";
import { Link } from 'react-router-dom';




class ResultsTableRow extends Component {
    constructor(props) {
        super(props);
        console.log(props.intron);
       //this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    state = {
        intron: this.props.intron,
        intronId: 1 //Temp. will be replace with props.intron.intronid once the search route contains that data
    };
    
    render() {
        return (



            <tr>
                <td><Link to={"results/details/" + this.state.intronId} {...this.state.intronIdWithLink}>{this.state.intron.genomeVersion}</Link></td>
                <td>{this.state.intron.speciesName}</td>
                <td>{this.state.intron.geneName}</td>
                <td>{this.state.intron.type}</td>
                <td>{this.state.intron.subtype}</td>
                <td>{this.state.intron.chromosome}</td>
                <td>{this.state.intron.start}</td>
                <td>{this.state.intron.end}</td>


            </tr>


        )
    }
}

export default ResultsTableRow;










