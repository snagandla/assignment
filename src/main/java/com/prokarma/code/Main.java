package com.prokarma.code;

import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

import org.apache.log4j.Logger;


public class Main {
	private static org.apache.log4j.Logger logger = Logger.getLogger(Main.class);
	final static org.apache.log4j.Logger  stndLog = Logger.getLogger("logger.file");
	 
	public static void main() throws IOException, SQLException {
		
		int m_id = 0;
		Scanner scanner = new Scanner(System.in);
		logger.info("enter head name");
		String name = scanner.nextLine();
		logger.info("enter age");
		int age = scanner.nextInt();
		int id = Agevalidator.validator(name, age, "maintask");
		if ( id >0) {
			scanner.nextLine();
		
			Connection persondb =DBconnection.main();
		     CallableStatement stmt=persondb.prepareCall("{call main_insert(?,?,?,?)}"); 
			
		     Statement rslt= persondb.createStatement();  
		     ResultSet resultset = rslt.executeQuery("select main_id.nextval from dual");
		     if(resultset.next()) {
		    	  m_id = resultset.getInt(1);
		     }
		     logger.info("enter maintask title");
			String title = scanner.nextLine();
			logger.info("enter description");
			String des = scanner.nextLine();
			stmt.setInt(1,m_id);
			stmt.setString(2,title);
			stmt.setString(3, des);
			stmt.setInt(4, id);
		    stmt.execute();	
		    persondb.commit();
		    persondb.close();
		    
		   SubTask subtask = new SubTask();
		   subtask.main(m_id);
		    
		}	else {
			logger.info(" cannot be assigned");
			
		}

		

		
		scanner.close();
	
		
	
}
}