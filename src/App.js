import './App.css';
import Dropdowns from './components/selectionDropdowns'
import SearchCriteria from './components/searchCriteria'
import SearchCriteriaTools from './components/tools'
import Header from './components/header'
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';

const referenceData = {
  label: 'Reference',
  criteria: ['Species', 'Common Name', 'Rank', 'Genome Version', 'Ensemble Version']
}

const geneData = {
  label: 'Gene',
  criteria: ['Name', 'NCBI Gene ID', 'Ensemble Gene ID', 'Sequence', 'Coordinates', 'Length', 'Strand', 'Ensemble Transcript ID']
}

const intronData = {
  label: 'Intron',
  criteria: ['Length', 'Coordinates', 'Sequence', 'Type', 'Subtype', 'Score', 'Branch Point Sequence', 'Acceptor Splice Site', 'Donor Splice Site']
}

const externalData = {
  label: 'External',
  criteria: ['NCBI Gene Link', 'Ensemble Gene Link', 'Transcript Ensemble Link', 'UCSC Link - Gene', 'UCSC Link - Intron']
}

const species = [
  "Apis mellifera", "Arabidopsis thaliana", "80s taurus", "Caenorhabditis elegans", "Canis familiaris", "Ciona intestinalis", "Danio rerio", "Drosophila melanogaster", "Fugu rubripes", "Gallus_gallus", "Homo_sapiens", "Macaca mulatta", "Monodelphis_domestica",
  "Mus musculus", "Pan_troglodytes", "Rattus_norvegicus", "Saccharomyces_cerevisiae", "Tetraodon_nigroviridis", "Xenopus_tropicalis"];


function App() {
  return (
    <div>
      <Header />
      <div className='container-fluid '>
        <div className='row'>
          <div className='col-lg-4 p-auto my-5 '>
            <Dropdowns species={species} />
            <SearchCriteria />
          </div>
          <div className='col-lg-8 p-auto my-5'>
            <SearchCriteriaTools title={referenceData.label} criteria={referenceData.criteria} />
            <SearchCriteriaTools title={geneData.label} criteria={geneData.criteria} />
            <SearchCriteriaTools title={intronData.label} criteria={intronData.criteria} />
            <SearchCriteriaTools title={externalData.label} criteria={externalData.criteria} />
            <Button className="float-right" size="lg">Search</Button>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default App;
