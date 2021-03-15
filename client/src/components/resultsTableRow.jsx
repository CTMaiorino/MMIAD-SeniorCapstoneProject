
import React, { Component } from "react";
import { Link } from 'react-router-dom';




class ResultsTableRow extends Component {
    constructor(props) {
        super(props);
        console.log(props.intron);
       this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    state = {
        intron: this.props.intron,
        intronId: 1 //Will be replaced once routes are fixed
    };

    onFormSubmit = (e) => {
       
    
       console.log(this.props.intron);
        var species = this.state.intron.speciesName
        var version = this.state.intron.genomeVersion
        fetch("https://major-and-minor-intron-db.ue.r.appspot.com/search/species/" + species)
        .then(response => response.json())
          .then(details=> {
              console.log(details);
            this.props.history.push({
              pathname: "/results/details/1" ,
              state: {
                data:details
              }
            })
            })
            

    }
    
    render() {
        return (



            <tr>
                <td class="bg-warning"><Link onClick={this.onFormSubmit}>{this.state.intron.genomeVersion}</Link></td>
                <td class="bg-warning">{this.state.intron.speciesName}</td>
                <td class="bg-warning">{this.state.intron.geneName}</td>
                <td class="bg-warning">{this.state.intron.type}</td>
                <td class="bg-warning">{this.state.intron.subtype}</td>
                <td class="bg-warning">{this.state.intron.chromosome}</td>
                <td class="bg-warning">{this.state.intron.start}</td>
                <td class="bg-warning">{this.state.intron.end}</td>


            </tr>


        )
    }
}

export default ResultsTableRow;










