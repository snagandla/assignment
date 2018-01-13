package com.prokarma.code;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Properties;

import org.apache.log4j.Logger;

public class DBconnection {
	private static org.apache.log4j.Logger logger = Logger.getLogger(DBconnection.class);
	final static org.apache.log4j.Logger  stndLog = Logger.getLogger("logger.file");
	String name;
	
	 static PreparedStatement ps1 = null;
	    public static Connection main() throws SQLException, IOException {
	    	final String config = "/db.properties";
	    	  
	        final InputStream resourceAsStream = DBconnection.class.getResourceAsStream(config);
	        final Properties properties = new Properties();
	        try {
	            properties.load(resourceAsStream);
	            resourceAsStream.close();
	        } catch (final FileNotFoundException e) {
	        	logger.info("file not found for properties to load");
	        	stndLog.error("Couldnot find the file -- fileNotFoundException" + e.getMessage());
	         
	           
	        }

	      
	        Connection connection = null;
	        try {
	        	
	            connection = DriverManager.getConnection(properties.getProperty("DB_URL"), properties.getProperty("USER"),
	                    properties.getProperty("PASS"));
	            logger.info("connection established");
	            connection.setAutoCommit(false);
	        } catch (final SQLException e) {
	        	logger.info("Connection Failed! Check output console");
	        	stndLog.error("Couldnot find the file -- fileNotFoundException" +e.getMessage());
	          
	        }
			return connection;
	    }
             
	        
	        
	        
	    
	    
	 
}
