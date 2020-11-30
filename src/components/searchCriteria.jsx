import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
class SearchCriteria extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

state = {
    strand: 'Strand',
    isVisible: true
}

handleSelect = (e) => {
    this.setState({ strand: e })
}

setVisibility = (e) => {
    this.setState({
        radio: this.state.radio,
        isVisible: !this.state.isVisible
    })
}
render() {
    return (
        <div className={this.state.isVisible === true ? 'border' : ''}>
            <div className="border border-dark d-flex p-3" >
                <Button className="m-2 p-2" onClick={this.setVisibility}>
                    <Image src="icon.png" width='30px' alt={this.state.isVisible === true ? 'Hide' : 'Show'} />
                </Button>
                <h1 className="m-2">Search Criteria</h1>
            </div>
            <Form variant='Primary' className={this.state.isVisible === true ? 'p-3 visable' : 'p-3 invisible'}  >
                <Form.Group className='container'>
                    <div className="row p-auto m-2">
                        <Form.Label className="col-sm m-auto ">Ensemble Gene ID:</Form.Label>
                        <Form.Control className="col-sm" />
                    </div>
                    <div className="row p-auto m-2">
                        <Form.Label className="col-sm m-auto">Ensemble Transcript ID:</Form.Label>
                        <Form.Control className="col-sm" />
                    </div>
                    <div className="row p-auto m-2">
                        <Form.Label className="col-sm m-auto">Gene Symbol:</Form.Label>
                        <Form.Control className="col-sm" />
                    </div >
                    <div className="row p-auto m-2">

                        <Form.Label className="col-sm p-auto m-auto" >Intron Class:</Form.Label>
                        <div className="col-sm m-auto p-auto" >
                            <Form.Check inline type="checkbox" label="U2" />
                            <Form.Check inline type="checkbox" label="U12" />
                        </div>
                    </div>
                    <div className="row p-auto m-2">
                        <Form.Label className="col-sm m-auto">Exact Length:</Form.Label>
                        <Form.Control className="col-sm" />
                    </div>
                    <div className="row p-auto m-2">
                        <Form.Label className="col-sm m-auto">Relative Length:</Form.Label>
                        <Form.Control className="col-sm" />
                    </div >
                    <div className="row p-auto m-2">
                        <Dropdown className="col-sm m-auto" onSelect={this.handleSelect} >
                            <Dropdown.Toggle variant='secondary'>
                                {this.state.strand}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey='+'>+</Dropdown.Item>
                                <Dropdown.Item eventKey='-' >-</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="row p-auto m-2">
                        <Form.Label className="col-sm m-auto">Coordinates:</Form.Label>
                        <Form.Control className="col-sm" />
                    </div>
                    <div className="row p-auto m-2">
                        <Form.Label className="col-sm m-auto">Exact Exon Rank:</Form.Label>
                        <Form.Control className="col-sm" />
                    </div>
                    <div className="row p-auto m-2">
                        <Form.Label className="col-sm m-auto">Relative Exon Length:</Form.Label>
                        <Form.Control className="col-sm" />
                    </div>
                    <div className="row p-auto m-2">
                        <Form.Label className="col-sm m-auto">Sequence:</Form.Label>
                        <Form.Control className="col-sm" />
                    </div>
                </Form.Group>

            </Form>
        </div >

    )


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
