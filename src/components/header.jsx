import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <Navbar bg="light" className="border-bottom" expand="lg">
        <h1>Major & Minor Intron Annotation Database (MMIAD)</h1>
        <Button className="ml-auto" variant="outline-primary">
          About
        </Button>
      </Navbar>
    );
  }
}
export default Header;
