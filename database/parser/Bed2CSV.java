import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Bed2CSV {

	public static void main(String[] args) {
		String[] pathnames;

        // Creates a new File instance by converting the given pathname string
        // into an abstract pathname
		
        File f = new File("BedFiles");
        pathnames = f.list();
        for (String pathname : pathnames) {
            
            bed2CSV(pathname);
        }


	}
	
	
	public static void bed2CSV(String file)
	{
		BufferedReader br;
		try {
			String fileNameBed= "BedOutputFiles/" + file + ".output.csv";
			System.out.println(fileNameBed);
			File newBed = new File(fileNameBed);
			FileWriter newBedWriter= new FileWriter(newBed);
			
			newBedWriter.write("chr,start,stop,intron id,score,strand \n");
			
			FileInputStream fstream = new FileInputStream("BedFiles/"+file);
			br = new BufferedReader(new InputStreamReader(fstream));
			String line;
		    while ((line = br.readLine()) != null) {
		    	line=line.replace("	", ",");
		    	line+="\n";
		    	newBedWriter.write(line);
		    }
		    
		    newBedWriter.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
