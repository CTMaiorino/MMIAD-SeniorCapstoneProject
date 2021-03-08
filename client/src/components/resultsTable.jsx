import Table from "react-bootstrap/Table";
import React, { Component } from "react";
import { Link } from 'react-router-dom';




class ResultsTable extends Component {
    constructor(props) {
        super(props);
        console.log(props.introns);
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

                    {this.props.introns.map((intron) => (
                        <tr>
                            <td class="bg-warning"><Link to="/results/details">{intron.genomeVersion}</Link></td>
                            <td class="bg-warning">{intron.speciesName}</td>
                            <td class="bg-warning">{intron.geneName}</td>
                            <td class="bg-warning">{intron.type}</td>
                            <td class="bg-warning">{intron.subtype}</td>
                            <td class="bg-warning">{intron.chromosome}</td>
                            <td class="bg-warning">{intron.start}</td>
                            <td class="bg-warning">{intron.end}</td>


                        </tr>

                    ))}

                </tbody>
            </Table>
        )
    }
}

export default ResultsTable;










