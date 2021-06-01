/*
Header
Created by: James Jacobson
4/30/2021
Header for all pages
*/

import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar bg="light" className="border-bottom justify-content-center" expand="lg">
        <h1 className="m-auto">Major & Minor Intron Annotation Database</h1>
        <Link to="/about">
          <Button className="pull-right" variant="outline-primary">
            About
          </Button>
        </Link>
      </Navbar>
    );
  }
}
export default Header;
