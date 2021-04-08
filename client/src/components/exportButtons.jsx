import React, { Component } from "react";
import * as Icon from "react-bootstrap-icons";
import { Modal, Button, Form } from "react-bootstrap";
import { exportAsGtf, exportAsBed } from './../exportHelperFunctions';
class ExportButtons extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }


  openModal = (source) => this.setState({ introns: this.state.introns, isOpen: true, isEmail: source });
  closeModal = () => this.setState({ introns: this.state.introns, isOpen: false, isEmail: this.state.isEmail });

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.introns)
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    exportAsBed(this.state.introns);
  }

  state = {
    introns: this.props.introns,
    isOpen: false,
    isEmail: true
  }
  render() {

    const isEmail = this.state.isEmail;
    const fileTypes = ["Default", "Exon GTF", "Intron Bed", "Downstream Exon Fasta", "Upstream Exon Fasta"]
    console.log(fileTypes)
    return (
      <div>
        <Button onClick={(e) => this.openModal(true)} className="m-2 p-auto float-right" variant="outline-primary">
          <Icon.EnvelopeFill style={{ paddingRight: "5px" }} />
          Email
        </Button>
        <Button onClick={(e) => this.openModal(false)} className="m-2 p-auto float-right" variant="outline-primary">
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
