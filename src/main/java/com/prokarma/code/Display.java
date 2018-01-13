package com.prokarma.code;

import java.io.IOException;
import java.sql.SQLException;
import java.util.Scanner;

import org.apache.log4j.Logger;

public class Display {
	private static org.apache.log4j.Logger logger = Logger.getLogger(Display.class);
	final static org.apache.log4j.Logger  stndLog = Logger.getLogger("logger.file");
	 
	public static  void main(String[] args) throws IOException, ClassNotFoundException,  SQLException{
		
		boolean option = true;
		Scanner scanner = new Scanner(System.in);
		do {
			
		logger.info("1. Add Main task ," + "\n"+" 2 Print already existing main and subtasks" +"\n "+ 
		   "3 Update maintask" +"\n"+"4. Exit");
		
		
		int menu = scanner.nextInt();
		scanner.nextLine();
	
		if(menu==1) {	Main.main();
			
		}else if(menu==2) { PrintData.main();			
		
		}else if(menu==3) { UpdateData.main();			
		break ;
		}else if(menu==4) { option = false;	
	}	
	}while(option != false);
		//scanner.close();
}
}
