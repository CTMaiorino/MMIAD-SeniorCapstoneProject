/*
Results Table
Created by: James Jacobson
4/30/2021
Contains the table headers, and iterates through intron data
*/

import Table from "react-bootstrap/Table";
import React, { Component } from "react";
import ResultsTableRow from "./resultsTableRow";




class ResultsTable extends Component {
    constructor(props) {
        super(props);
        console.log(props.introns);

    }
    render() {
        return (
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Genome Version</th>
                        <th>Species</th>
                        <th>Transcriptome</th>
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

                        <ResultsTableRow intron={intron} />
                    ))}
                </tbody>
            </Table>
        )
    }
}

export default ResultsTable;










