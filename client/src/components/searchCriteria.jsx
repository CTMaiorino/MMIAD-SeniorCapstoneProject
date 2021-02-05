import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

class SearchCriteria extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    strand: "Strand",
    isVisible: true,
  };

  handleSelect = (e) => {
    this.setState({ strand: e });
  };

  setVisibility = (e) => {
    this.setState({
      strand: this.state.strand,
      isVisible: !this.state.isVisible,
    });
  };

  onClick = (num) => () => {
    this.setState({
      strand: num,
    });
  };

  render() {
    return (
      <div className={this.state.isVisible === true ? "border" : ""}>
        <div className="border border-dark d-flex p-3">
          <Button
            variant="light"
            className="m-2 p-1"
            onClick={this.setVisibility}
          >
            <Image
              src="icon.png"
              width="30px"
              alt={this.state.isVisible === true ? "Hide" : "Show"}
            />
          </Button>
          <h2 className="m-2">Search Criteria</h2>
        </div>
        <div
          variant="Primary"
          className={
            this.state.isVisible === true ? "p-3 visable" : "p-3 invisible"
          }
        >
          <Form.Group className="container">
            <div className="row p-auto m-2">
              <Form.Label style={{ fontSize: 22 }} className="col-sm m-auto ">
                Ensemble Gene ID:
              </Form.Label>
              <Form.Control
                size="lg"
                style={{ fontSize: 22 }}
                className="col-sm"
                name="ensembleGeneID"
              />
            </div>
            <div className="row p-auto m-2">
              <Form.Label style={{ fontSize: 22 }} className="col-sm m-auto">
                Ensemble Transcript ID:
              </Form.Label>
              <Form.Control
                size="lg"
                className="col-sm"
                name="ensemblTranscriptID"
              />
            </div>
            <div className="row p-auto m-2">
              <Form.Label style={{ fontSize: 22 }} className="col-sm m-auto">
                Gene Symbol:
              </Form.Label>
              <Form.Control size="lg" className="col-sm" name="geneSymbol" />
            </div>
            <div className="row p-auto m-2">
              <Form.Label
                style={{ fontSize: 22 }}
                className="col-sm p-auto m-auto"
              >
                Intron Class:
              </Form.Label>
              <div className="col-sm m-auto p-auto">
                <Form.Check
                  style={{ fontSize: 22 }}
                  name="U2"
                  inline
                  type="checkbox"
                  label="U2"
                />
                <Form.Check
                  style={{ fontSize: 22 }}
                  name="U12"
                  inline
                  type="checkbox"
                  label="U12"
                />
              </div>
            </div>
            <div className="row p-auto m-2">
              <Form.Label style={{ fontSize: 22 }} className="col-sm m-auto">
                Exact Length:
              </Form.Label>
              <Form.Control size="lg" className="col-sm" name="exactLength" />
            </div>
            <div className="row p-auto m-2">
              <Form.Label style={{ fontSize: 22 }} className="col-sm m-auto">
                Relative Length:
              </Form.Label>
              <Form.Control
                size="lg"
                className="col-sm"
                name="relativeLength"
              />
            </div>
            <div className="row p-auto m-2">
              <Form.Label
                style={{ fontSize: 22 }}
                className="col-sm p-auto m-auto"
              >
                Strand:
              </Form.Label>
              <div className="col-sm m-auto p-auto">
                <Form.Check
                  style={{ fontSize: 22 }}
                  inline
                  type="radio"
                  name="+"
                  label="+"
                  onClick={this.onClick(1)}
                  checked={this.state.strand === 1 ? true : false}
                />
                <Form.Check
                  style={{ fontSize: 22 }}
                  inline
                  type="radio"
                  name="-"
                  eventKey="-"
                  label="-"
                  onClick={this.onClick(2)}
                  checked={this.state.strand === 2 ? true : false}
                />
              </div>
            </div>
            <div className="row p-auto m-2">
              <Form.Label style={{ fontSize: 22 }} className="col-sm m-auto">
                Coordinates:
              </Form.Label>
              <Form.Control size="lg" className="col-sm" name="coordinates" />
            </div>
            <div className="row p-auto m-2">
              <Form.Label style={{ fontSize: 22 }} className="col-sm m-auto">
                Exact Exon Rank:
              </Form.Label>
              <Form.Control size="lg" className="col-sm" name="exactExonRank" />
            </div>
            <div className="row p-auto m-2">
              <Form.Label style={{ fontSize: 22 }} className="col-sm m-auto">
                Relative Exon Length:
              </Form.Label>
              <Form.Control
                size="lg"
                className="col-sm"
                name="relativeExonLength"
              />
            </div>
            <div className="row p-auto m-2">
              <Form.Label style={{ fontSize: 22 }} className="col-sm m-auto">
                Sequence:
              </Form.Label>
              <Form.Control size="lg" className="col-sm" name="sequence" as="textarea" rows={5} />
            </div>
          </Form.Group>
        </div>
      </div>
    );
  }
}
export default SearchCriteria;
