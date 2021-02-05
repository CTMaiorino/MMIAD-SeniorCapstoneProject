import "./App.css";
import Dropdowns from "./components/selectionDropdowns";
import SearchCriteria from "./components/searchCriteria";
import SearchCriteriaTools from "./components/tools";
import Header from "./components/header";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

const referenceData = {
  label: "Reference",
  criteria: [
    "Species",
    "Common Name",
    "Rank",
    "Genome Version",
    "Ensembl Version",
  ],
};

const geneData = {
  label: "Gene",
  criteria: [
    "Name",
    "NCBI Gene ID",
    "Ensembl Gene ID",
    "Sequence",
    "Coordinates",
    "Length",
    "Strand",
    "Ensembl Transcript ID",
  ],
};

const intronData = {
  label: "Intron",
  criteria: [
    "Length",
    "Coordinates",
    "Sequence",
    "Type",
    "Subtype",
    "Score",
    "Branch Point Sequence",
    "Acceptor Splice Site",
    "Donor Splice Site",
  ],
};

const externalData = {
  label: "External",
  criteria: [
    "NCBI Gene Link",
    "Ensembl Gene Link",
    "Transcript Ensembl Link",
    "UCSC Link - Gene",
    "UCSC Link - Intron",
  ],
};

const species = [
  "Apis mellifera",
  "Arabidopsis thaliana",
  "Bos taurus",
  "Caenorhabditis elegans",
  "Canis familiaris",
  "Ciona intestinalis",
  "Danio rerio",
  "Drosophila melanogaster",
  "Fugu rubripes",
  "Gallus_gallus",
  "Homo_sapiens",
  "Macaca mulatta",
  "Monodelphis_domestica",
  "Mus musculus",
  "Pan_troglodytes",
  "Rattus_norvegicus",
  "Saccharomyces_cerevisiae",
  "Tetraodon_nigroviridis",
  "Xenopus_tropicalis",
];

// Debugging purposes
function onSearch() {}

const onFormSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries());
  //console.log(formDataObj);

  var data = formDataObj; // The object containing search parameters

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("http://localhost:5000/search", options);
  // console.log(options); //Debugging
  console.log(options.body); //Debugging (Displays the JSON object)
  // console.log("JSON Object was sent to the server"); //Debugging
};

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid ">
        <Form onSubmit={onFormSubmit}>
          <div className="row">
            <div className="col-lg-4 p-auto my-5 ">
              <Dropdowns species={species} />
              <SearchCriteria />
            </div>
            <div className="col-lg-8 p-auto my-5">
              <SearchCriteriaTools
                title={referenceData.label}
                criteria={referenceData.criteria}
              />
              <SearchCriteriaTools
                title={geneData.label}
                criteria={geneData.criteria}
              />
              <SearchCriteriaTools
                title={intronData.label}
                criteria={intronData.criteria}
              />
              <SearchCriteriaTools
                title={externalData.label}
                criteria={externalData.criteria}
              />
              <Button
                className="float-right"
                size="lg"
                type="submit"
                onClick={onSearch}
              >
                <Image src="searchIcon.jpg" width="20px" />
                Search
              </Button>
            </div>
            <div />
          </div>
        </Form>
      </div>
    </div>
  );
}

export default App;
