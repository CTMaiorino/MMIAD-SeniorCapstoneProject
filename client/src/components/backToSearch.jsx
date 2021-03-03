import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

class BackToSearch extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="row" style={{ marginLeft: "10px" }}>
        <Link to="/">
          <Button className="ml-auto" variant="outline-danger">
            <Icon.ArrowLeft style={{ paddingRight: "5px" }} />
            Back To Search
          </Button>
        </Link>
      </div>
    );
  }
}
export default BackToSearch;
