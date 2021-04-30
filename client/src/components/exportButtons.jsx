/*
Export Buttons
Created by: James Jacobson
4/30/2021
Buttons that allow the users to download different file types to their computer/
Modal that lets the user select the file types
*/

import React, { Component } from "react";
import * as Icon from "react-bootstrap-icons";
import { Modal, Button, Form } from "react-bootstrap";
import { exportAsGtf, exportAsBed, exportAsDownstreamFasta, exportAsUpstreamFasta, exportAsDefault } from './../exportHelperFunctions';
class ExportButtons extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }


  openModal = () => this.setState({ introns: this.state.introns, isOpen: true });
  closeModal = () => this.setState({ introns: this.state.introns, isOpen: false });

  /*When the export button is clicked check which checkmarks are selected in the modal 
  and send the data to be created into that file type(s)*/
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.introns)
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    const introns = this.props.introns
    const fileTypes = this.fileTypes.types;
    const isEmail = this.state.isEmail

    Object.keys(formDataObj).forEach(type => {
      switch (type) {
        case fileTypes[0].toLowerCase():
          exportAsDefault(introns, isEmail);
          break;
        case fileTypes[1].toLowerCase():
          exportAsGtf(introns, isEmail);
          break;
        case fileTypes[2].toLowerCase():
          exportAsBed(introns, isEmail);
          break;
        case fileTypes[3].toLowerCase():
          exportAsDownstreamFasta(introns, isEmail);
          break;
        case fileTypes[4].toLowerCase():
          exportAsUpstreamFasta(introns, isEmail);
          break;

        default:
      }
    })
  }
  render() {
    const fileTypes = this.fileTypes.types
    return (
      <div>

        <Button onClick={(e) => this.openModal()} className="m-2 p-auto float-right" variant="outline-primary">
          <Icon.ArrowDownCircleFill style={{ paddingRight: "5px" }} />
          Export
        </Button>


        <Modal centered show={this.state.isOpen} onHide={this.closeModal}>

          <Modal.Header closeButton className="border-0 px-2 py-0" />
          <div className="p-2">
            <Form onSubmit={this.onSubmit}>
              {isEmail ?
                (<Form.Control
                  name="email"
                  placeholder="Enter email"
                  className="w-2"
                />)
                : (<h1></h1>)}


              <Modal.Title><b>Export Options:</b></Modal.Title>

              <Modal.Body>

                {fileTypes.map((item, index) => (
                  <Form.Check
                    className="d-flex"
                    inline
                    label={item}
                    name={item.toLowerCase()}
                  />))}

              </Modal.Body>

              <Modal.Footer className="border-0">
                <Button variant="primary" type="submit" >
                  Export
            </Button>
              </Modal.Footer>

            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
export default ExportButtons;
