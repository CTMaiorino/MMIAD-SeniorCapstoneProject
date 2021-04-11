/*
If you need to modify the file type names, go to line 47 in exportButtons.jsx
And if the function names need to change, go to line 15 in exportButtons.jsx and change the one you need, and in here as well
You will also need to change the import in exportButtons.jsx to match the function as well
*/




export const exportAsGtf = (introns) => {
    var totalString = ""
    introns.forEach((intron) => {

    })
    downloadFile(totalString, "gtf");
}

//Using this function as an example of how to code the rest
export const exportAsBed = (introns) => {
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
    downloadFile(totalString, "bed");//This function gets your data, with a speficied type(Which could be wrong but I guessed) and  will download the file
    
    
}
export const exportAsDefault = (introns) => {
    var totalString = ""
    console.log(introns);
    introns.forEach((intron) => {

    })
    downloadFile(totalString, "default");
    
    
}

export const exportAsDownstreamFasta = (introns) => {
    var totalString = ""
    console.log(introns);
    introns.forEach((intron) => {

    })
    downloadFile(totalString, "fasta");
    
    
}

export const exportAsUpstreamFasta = (introns) => {
    var totalString = ""
    console.log(introns);
    introns.forEach((intron) => {

    })
    downloadFile(totalString, "fasta");
    
    
}

//Downloads the file
export const downloadFile = (data,type) =>
{
    const element = document.createElement("a");
    const file = new Blob([data], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "MMIAD" + type + "." + type; //This is the file structure I chose. For example, a bed file would be MMIADbed.bed
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}

    
