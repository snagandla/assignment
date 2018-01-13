package com.prokarma.code;

import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

import org.apache.log4j.Logger;

public class SubTask {
	private static org.apache.log4j.Logger logger = Logger.getLogger(SubTask.class);
	final static org.apache.log4j.Logger  stndLog = Logger.getLogger("logger.file");
	public  void main(int m_id) throws SQLException, IOException {
		
		Scanner sc = new Scanner(System.in);
		logger.info("enter no of subtasks");
		int ns = sc.nextInt();
		sc.nextLine();
		int s_id=0;
		DBconnection person =new DBconnection();
		Connection persondb =DBconnection.main();
		for (int i = 0; i < ns; i++) {
			 
			sc.nextLine();
		    
			
			logger.info("enter  name");
			String subtaskname = sc.nextLine();
			logger.info("enter age");
			int subage = sc.nextInt();
			
			int subtaskperson_id =Agevalidator.validator(subtaskname, subage, "subtask");
			if (subtaskperson_id > 0) {
			
				 Statement rslt= persondb.createStatement();  
			     ResultSet resultset = rslt.executeQuery("select sub_id.nextval from dual");
			     if(resultset.next()) {
			    	   s_id = resultset.getInt(1);
			     }
			     sc.nextLine();
			logger.info("enter subtask title\n");
			String subtitle = sc.nextLine();
			logger.info("enter description");
			String subdes = sc.nextLine();
			logger.info("enter estimated hours");
			int ehours = sc.nextInt();
				sc.nextLine();
			
				CallableStatement stmt=persondb.prepareCall("{call sub_insert(?,?,?,?,?,?)}"); 
			stmt.setInt(1, s_id);
			stmt.setInt(2, m_id);
			stmt.setString(3, subtitle);
			stmt.setString(4, subdes);
			stmt.setInt(5, ehours);
			stmt.setInt(6,subtaskperson_id);
			stmt.execute();
			 
			}
			persondb.commit();
			persondb.close();
		}sc.close();
	   
	}
}