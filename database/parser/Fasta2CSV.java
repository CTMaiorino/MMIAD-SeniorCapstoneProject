import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Fasta2CSV {

	public static void main(String[] args) {
		String[] pathnames;

        // Creates a new File instance by converting the given pathname string
        // into an abstract pathname
		
        File f = new File("FastaFiles");
        pathnames = f.list();
        for (String pathname : pathnames) {
            
            fasta2CSV(pathname);
        }
        File d = new File("OutputFiles");
        pathnames = d.list();
        for (String pathname : pathnames) {
            
            System.out.println(pathname);
        }


	}
	
	
	public static void fasta2CSV(String file)
	{
		BufferedReader br;
		try {
			String fileNameCSV= "OutputFiles/" + file + ".output.csv";
			File newCSV = new File(fileNameCSV);
			FileWriter newCSVWriter= new FileWriter(newCSV);
			
			newCSVWriter.write("taxonomic name,chr,strand,start,stop,length,phase,rank,sequence \n");
			
			FileInputStream fstream = new FileInputStream("FastaFiles/"+file);
			br = new BufferedReader(new InputStreamReader(fstream));
			String row="";
			String line;
			boolean isHeader=true;
		    while ((line = br.readLine()) != null) {
		       if(isHeader)
		       {
		    	   line=line.substring(1,line.length());
		    	   row=line.replace("|",",");
		    	   isHeader=false;
		       }
		       else
		       {
		    	   row+=","+line+"\n";
		    	   newCSVWriter.write(row);
		    	   isHeader=true;
		       }
		     
		    }
		    newCSVWriter.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
