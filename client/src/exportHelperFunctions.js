export const exportAsGtf = (introns) => {
    introns.forEach((intron) => {
        console.log(intron)
        const chromosome = intron.chromosome
        const source = "MMIAD"
        const feature = "intron"
        const start = intron.intronStartCoord
    });
}
export const exportAsBed = (introns) => {
    var totalString = ""
    introns.forEach((intron) => {
        console.log(intron)
        const chromosome = intron.chromosome
        const start = intron.intronStartCoord
        const end = intron.intronStartCoord
        const intronId = intron.intronId
        const score = intron.overallScore
        const strand = intron.strand
        totalString += chromosome + "   " + start + "   " + end + "   " + intronId + "   " + score + "   " + strand + "\n"

    })
    
    const element = document.createElement("a");
    const file = new Blob([totalString], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "MMIADBed.bed";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    
}

    /*
    
    */
