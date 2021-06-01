/*
exporterHelperFunctions
Created by: James, Phil, and Corey
Parses intron data as different file types
If you need to modify the file type names, go to line 47 in exportButtons.jsx
And if the function names need to change, go to line 15 in exportButtons.jsx and change the one you need, and in here as well
You will also need to change the import in exportButtons.jsx to match the function as well
*/




export const exportAsGtf = (introns,isEmail) => {
    var geneString = ""
    var transcriptString = ""
    var totalString = ""
    introns.forEach((intron) => {
        //Here, it grabs information about the intron that is needed for the file. You will need to do this as well for different properties
        const sequence = intron.sequence
        const geneId = intron.ensemblGeneId
        const start = intron.intronStartCoord
        const end = intron.intronStartCoord
        const score = intron.overallScore
        const strand = intron.strand
        const transcriptomeId = intron.transcriptomeId
        //Following data points do not currently exist in the DB
        //Replace at later date when data is supported 
        const geneSource = "N/A"
        const geneName = "N/A" // intron.geneName is currently null in DB
        const geneBioType = "transcribed_unprocessed_pseudogene"
        //GTF format has these properties separated by tabs, followed by a new line
        geneString = "transcribed_unprocessed_pseudogene  gene " + "   " + "gene_id: " + geneId + "   " + "gene_name: " + geneName + "   " + "gene_source: " + geneSource + "   " + "gene_start: " + start + "   " + "gene_end: " + end + "   " + "gene_score: " + score + "   " + "gene_strand: " + strand + "   " + "gene_sequence: " + sequence + "   " + "gene_bioType: " + geneBioType + "\n"
        transcriptString = "processed_transcript                transcript " + "   " + "gene_id: " + geneId + "   " + "transcript_id: " + transcriptomeId + "   " + "gene_name: " + geneName + "   " + "gene_source: " + geneSource + "   " + "gene_bioType: " + geneBioType + "   " + "gene_name: " + geneName + "\n"
        totalString += geneString + transcriptString + "\n"
    })
    downloadFile(totalString, "gtf", isEmail);
}

//Using this function as an example of how to code the rest
export const exportAsBed = (introns,isEmail) => {
    var totalString = ""//Your entire file must be saved as 1 string. TotalString will be this string
    console.log(introns);
    introns.forEach((intron) => {//Add to the string for every intron
        //console.log(intron)

        //Here, it grabs information about the intron that is needed for the file. You will need to do this as well for different properties
        const chromosome = intron.chromosome
        const start = intron.intronStartCoord
        const end = intron.intronStartCoord
        const intronId = intron.intronId
        const score = intron.overallScore
        const strand = intron.strand
        //Bed format has these properties separated by tabs, followed by a new line
        //You might need to do more complecated string stuff. I know for Fasta, I would need to have 2 \n's"
        totalString += chromosome + "   " + start + "   " + end + "   " + intronId + "   " + score + "   " + strand + "\n"

    })
    downloadFile(totalString, "bed", isEmail);//This function gets your data, with a speficied type(Which could be wrong but I guessed) and  will download the file


}
export const exportAsDefault = (introns,isEmail) => {
    
    var totalString = ""
    introns.forEach((intron) => {
        totalString+= Object.values(intron).toString() + "\n"
    })
    var headerString=Object.keys(introns[0]).toString() + "\n"
    totalString= headerString + totalString
    downloadFile(totalString, "csv", isEmail);
}


export const exportAsDownstreamFasta = (introns,isEmail) => {
    var totalString = ""
    introns.forEach((intron) => {
        const id = intron.intronId;
        const speciesName = intron.speciesName;
        const chromosome = intron.chromosome;
        const strand = intron.strand;
        const start = intron.geneStartCoord;
        const end = intron.geneEndCoord;
        const geneLength = intron.geneLength;
        const score = intron.scoreId;
        const rank = intron.rank;
        const sequence = intron.intronSequence;
        totalString += ">" + id + "|" + speciesName + "|" + chromosome + "|" + strand + "|" + start
            + "|" + end + "|" + geneLength + "|" + score + "|" + rank + "\n"
            + sequence + "\n";
    })
    downloadFile(totalString, "dwnfasta", isEmail);


}

export const exportAsUpstreamFasta = (introns,isEmail) => {
    var totalString = ""
    console.log(introns,isEmail);
    introns.forEach((intron) => {
        const id = intron.intronId;
        const speciesName = intron.speciesName;
        const chromosome = intron.chromosome;
        const strand = intron.strand;
        const start = intron.geneStartCoord;
        const end = intron.geneEndCoord;
        const geneLength = intron.geneLength;
        const score = intron.scoreId;
        const rank = intron.rank;
        const sequence = intron.intronSequence;
        totalString += ">" + id + "|" + speciesName + "|" + chromosome + "|" + strand + "|" + start
            + "|" + end + "|" + geneLength + "|" + score + "|" + rank + "\n"
            + sequence + "\n";
    })
    return downloadFile(totalString, "upfasta", isEmail);


}

//Downloads the file
export const downloadFile = (data, type, isEmail) => {
    const element = document.createElement("a");
    const file = new Blob([data], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    if(isEmail)
    {
        
    }
    else
    {
    element.download = "MMIAD" + type + "." + type; //This is the file structure I chose. For example, a bed file would be MMIADbed.bed
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    }
}


