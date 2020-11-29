import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class SearchCriteria extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {
    radio: 0,
    isVisible: true,
  };

  onClick = (num) => () => {
    this.setState({
      radio: num,
    });
  };

  setVisibility = (e) => {
    this.setState({
      radio: this.state.radio,
      isVisible: !this.state.isVisible,
    });
  };
  render() {
    return (
      <div className={this.state.isVisible === true ? "border" : ""}>
        <div className="border border-dark d-flex p-3">
          <Button onClick={this.setVisibility}>
            {this.state.isVisible === true ? "Hide" : "Show"}{" "}
          </Button>
          <h1>Search Criteria</h1>
        </div>
        <Form
          variant="Primary"
          className={
            this.state.isVisible === true ? "p-3 visable" : "p-3 invisible"
          }
        >
          <Form.Group>
            <Form.Label>Ensembl Gene ID:</Form.Label>
            <Form.Control />
            <Form.Label>Ensembl Transcript ID:</Form.Label>
            <Form.Control />
            <Form.Label>Gene Symbol:</Form.Label>
            <Form.Control />
            <Form.Text>Intron Type:</Form.Text>
            <Form.Check inline type="checkbox" label="U2" />
            <Form.Check inline type="checkbox" label="U12" />
            <br></br>
            <Form.Label>Exact Length:</Form.Label>
            <Form.Control />
            <Form.Label>Relative Length:</Form.Label>
            <Form.Control />
            <Form.Text>Strand:</Form.Text>
            <Form.Check
              inline
              type="radio"
              label="+"
              onClick={this.onClick(1)}
              checked={this.state.radio === 1 ? true : false}
            />
            <Form.Check
              inline
              type="radio"
              eventKey="-"
              label="-"
              onClick={this.onClick(2)}
              checked={this.state.radio === 2 ? true : false}
            />
            <br></br>
            <Form.Label>Coordinates:</Form.Label>
            <Form.Control />
            <Form.Label>Exact Exon Rank:</Form.Label>
            <Form.Control />
            <Form.Label>Relative Exon Length:</Form.Label>
            <Form.Control />
            <Form.Label>Sequence:</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
export default SearchCriteria;
