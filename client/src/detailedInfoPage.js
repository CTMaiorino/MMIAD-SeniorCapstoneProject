import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.css";
import IntronInfoCollapsable from './components/introInfoCollapsables';
import BackToSearch from "./components/backToSearch";

const basicData = {
  label: "Basic",
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

function DetailedIntronInfo() {
  return (
    <div>
      <Header />
      <div className="mt-3"><BackToSearch/></div>
      
      <div className="container-fluid ">
          <IntronInfoCollapsable title={basicData.label} criteria={basicData.criteria}/>
          <IntronInfoCollapsable title={geneData.label} criteria={geneData.criteria}/>
          <IntronInfoCollapsable title={intronData.label} criteria={intronData.criteria}/>
          <IntronInfoCollapsable title={externalData.label} criteria={externalData.criteria}/>
      </div>
    </div>

  )
}

export default DetailedIntronInfo;
