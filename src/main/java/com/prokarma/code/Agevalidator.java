package com.prokarma.code;

import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

import org.apache.log4j.Logger;

public class Agevalidator {
	private static org.apache.log4j.Logger logger = Logger.getLogger(Agevalidator.class);
	final static org.apache.log4j.Logger  stndLog = Logger.getLogger("logger.file");
	public static int validator(String name,int age,String task) throws SQLException, IOException {
		DBconnection person =new DBconnection();
		Connection persondb =DBconnection.main();
				int p_id = 0;
	     CallableStatement stmt=persondb.prepareCall("{call person_insert(?,?,?)}"); 
		if(task == "maintask") {
			if(age>30) {
		
					Statement rslt= persondb.createStatement();  
			     ResultSet resultset = rslt.executeQuery("select person_id.nextval from dual");
			     if(resultset.next()) {
			    	  p_id = resultset.getInt(1);
			     }
			     stmt.setInt(1, p_id);
			     stmt.setString(2,name);
			     stmt.setInt(3, age );
			     
			     stmt.execute();
			     
             persondb.close();
				return p_id;
			}else {
				try {
					throw new InvalidAgeException();
				} catch (InvalidAgeException e) {
					stndLog.error("age entered is invalid for maintask-- invalid age exception");
				}
			}
		}else if (task == "subtask") {
			if(age>=20 && age <=30) {
				Statement rslt= persondb.createStatement();  
			     ResultSet resultset = rslt.executeQuery("select person_id.nextval from dual");
			     if(resultset.next()) {
			    	  p_id = resultset.getInt(1);
			     }
			     stmt.setInt(1, p_id);
			     stmt.setString(2,name);
			     stmt.setInt(3, age );
			     stmt.execute();
			   persondb.close();
				return p_id;
			}else {
				try {
					throw new InvalidAgeException();
				} catch (InvalidAgeException e) {
					stndLog.error("age entered is invalid for subtask");
					
				}
			}
		}
		else 
			logger.info("invalid task name");
		
		return p_id;
		
			
		
		
		
	}

	
	
	
	
	
}
