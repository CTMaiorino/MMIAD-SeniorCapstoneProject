import Table from "react-bootstrap/Table";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ResultsTableRow from "./resultsTableRow";




class ResultsTable extends Component {
    constructor(props) {
        super(props);
        console.log(props.introns);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    state = {
        selectedSpecies: false,
        selectedVersion: true,
    };

    onFormSubmit = (e) => {
        console.log(e)
        
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
    render() {
        return (
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Genome Version</th>
                        <th>Species</th>
                        <th>Gene </th>
                        <th>Type</th>
                        <th>Subtype</th>
                        <th>Chromosome</th>
                        <th>Start</th>
                        <th>End</th>
                    </tr>
                </thead>
                <tbody>

                    {this.props.introns.map((intron) => (
                        
                            <ResultsTableRow intron={intron}/>


                        

                    ))}

                </tbody>
            </Table>
        )
    }
}

export default ResultsTable;










