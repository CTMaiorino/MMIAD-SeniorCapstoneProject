import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image"
import ResultsTable from "./components/resultsTable";



function SearchResults() {
  return (
    <div>
      <Header />

      <div className="container-fluid ">
       <h2>Results:</h2>
          <Button className="m-2 p-auto float-right" variant="outline-primary"><Image src="icon-email.png" width="20px" />Email</Button>
          <Button className="m-2 p-auto float-right" variant="outline-primary"><Image src="icon-download.png" width="20px" />Export</Button>
        <ResultsTable/>
      </div>
    </div>

  )
}

export default SearchResults;
