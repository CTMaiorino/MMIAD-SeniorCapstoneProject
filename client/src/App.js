import "./App.css";
import Dropdowns from "./components/selectionDropdowns";
import SearchCriteria from "./components/searchCriteria";
import SearchCriteriaTools from "./components/tools";
import Header from "./components/header";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchPage from './searchPage';
import SearchResults from './searchResults';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/results" component={SearchResults} />
      </Switch>
    </BrowserRouter>
  )

}

export default App;
