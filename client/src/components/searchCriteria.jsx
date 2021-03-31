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
    strand: 3,
    type: 3,
    isVisible: true,
  };


  setVisibility = (e) => {
    this.setState({
      strand: this.state.strand,
      type: this.state.type,
      isVisible: !this.state.isVisible,
    });
  };

  onStrandClick = (num) => () => {
    if (this.state.strand != num) {
      this.setState({
        strand: num,
        type: this.state.type,
        isVisible: this.state.isVisible,
      });
    }
    else {
      this.setState({
        strand: 3,
        type: this.state.type,
        isVisible: this.state.isVisible,
      });
    }

  };

  onTypeClick = (num) => () => {
    if (this.state.type != num) {
      this.setState({
        strand: this.state.strand,
        type: num,
        isVisible: this.state.isVisible,
      });
    }
    else {
      this.setState({
        strand: this.state.strand,
        type: 3,
        isVisible: this.state.isVisible,
      });
    }

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
                name="ensemblGeneId"
              />
            </div>
            <div className="row p-auto m-2">
              <Form.Label style={{ fontSize: 22 }} className="col-sm m-auto">
                Ensemble Transcript ID:
              </Form.Label>
              <Form.Control
                size="lg"
                className="col-sm"
                name="transcriptomeId"
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
                  name="intronType"
                  inline
                  type="radio"
                  label="U2"
                  value="U2"
                  onClick={this.onTypeClick(1)}
                  checked={this.state.type === 1 ? true : false}
                />
                <Form.Check
                  style={{ fontSize: 22 }}
                  name="intronType"
                  inline
                  type="radio"
                  label="U12"
                  value="U12"
                  onClick={this.onTypeClick(2)}
                  checked={this.state.type === 2 ? true : false}
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
                name="intronLength"
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
                  name="strand"
                  label="+"
                  value="+"
                  onClick={this.onStrandClick(1)}
                  checked={this.state.strand === 1 ? true : false}
                />
                <Form.Check
                  style={{ fontSize: 22 }}
                  inline
                  type="radio"
                  name="strand"
                  eventKey="-"
                  label="-"
                  value="-"
                  onClick={this.onStrandClick(2)}
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
