import Dropdowns from "./components/selectionDropdowns";
import Header from "./components/header";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import BackToSearch from "./components/backToSearch";

function About() {
  return (
    <div>
      <Header />
      <div className="container-fluid" style={{ marginBottom: "20px" }}>
        <div className="row justify-content-center">
          <div className="col-lg-6" style={{ marginTop: "30px" }}>
            {/* Within the centered row, an accordion is used to display the three cards. */}
            <Accordion>
              {/* This card contains information on the project background */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    What is MMIAD?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    The Major and Minor Intron Annotation Database (MMIAD)
                    system allows biologists/bioinformatics researchers to
                    search for major and minor introns of genomes from a variety
                    of species. The system will be able to find and predict
                    major introns in new/updated genomes. This allows
                    researchers to have intron annotations that match the genome
                    and transcriptome versions they use in their analysis
                    without the need to perform version conversion. Genomes will
                    not only be up-to-date, but will also have their data from
                    past versions stored. This lets biologists have the ability
                    to compare major introns between different generations. With
                    these features, MMIAD offers users an intuitive interface
                    and the convenience of exporting search results.
                  </Card.Body>
                  {/* By default, each card is collapsed and only displays the header title. */}
                </Accordion.Collapse>
              </Card>
              {/* Information on the project's technologies */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Technologies Used
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    The MMIAD system's website was created using JavaScript and
                    the React library, while styling was handled using
                    Bootstrap. The system was deployed on the Google Cloud
                    Platform, specifically using Cloud SQL for the database and
                    App Engine for the server.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* Information on the development behind the system */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Development Team
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    The MMIAD system was developed by Quinnipiac University
                    (September 2020 - May 2021) <br />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Back button (from the React components folder) that brings you back to the search page */}
      <BackToSearch />
    </div>
  );
}

export default About;
