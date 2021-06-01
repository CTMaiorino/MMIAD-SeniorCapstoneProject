import Table from "react-bootstrap/Table";
import React, { Component } from "react";
import { Link } from 'react-router-dom';




class ResultsTable extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    state = {
        selectedSpecies: false,
        selectedVersion: true,
    };


    render() {
        return (
            <Table bordered hover>
                <thead>
                    <tr>
                        <th class="bg-secondary">Genome Version</th>
                        <th class="bg-secondary">Species</th>
                        <th class="bg-secondary">Gene </th>
                        <th class="bg-secondary">Type</th>
                        <th class="bg-secondary">Subtype</th>
                        <th class="bg-secondary">Chromosome</th>
                        <th class="bg-secondary">Start</th>
                        <th class="bg-secondary">End</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-warning">
                        <td >Result 1:Genome Version</td>
                        <td class="bg-warning"><Link to="/results/details">Result 1:Species</Link></td>
                        <td class="bg-warning">Result 1:Gene </td>
                        <td class="bg-warning">Result 1:Type</td>
                        <td class="bg-warning">Result 1:Subtype</td>
                        <td class="bg-warning">Result 1:Chromosome</td>
                        <td class="bg-warning">Result 1:Start</td>
                        <td class="bg-warning">Result 1:End</td>
                    </tr>
                    {/*
                    {this.dataFromDatabaseSearch.map((Data) => (
                        <tr>
                            <td>Data[0][0]:Genome Version</td>
                            <td>Data[0][1]:Species</td>
                            <td>Data[0][2]:Gene Name</td>
                            <td>Data[0][3]:Type</td>
                            <td>Data[0][4]:Subtype</td>
                            <td>Data[0][5]:Chromosome</td>
                            <td>Data[0][6]:Start</td>
                            <td>Data[0][7]:End</td>
                        </tr>

                    ))};
                    */}
                </tbody>
            </Table>
        )
    }
}

export default ResultsTable;










