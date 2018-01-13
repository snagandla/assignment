package com.prokarma.code;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.apache.log4j.Logger;

public class PrintData {
	private static org.apache.log4j.Logger logger = Logger.getLogger(PrintData.class);
	final static org.apache.log4j.Logger  stndLog = Logger.getLogger("logger.file");
public static void main(String[] args) throws SQLException, IOException {
	main();
}
	public static void main() throws SQLException, IOException {
		DBconnection person =new DBconnection();
		Connection persondb =DBconnection.main();
		Statement rslt= persondb.createStatement();  
		ResultSet maintask = rslt.executeQuery("select * from main_det m , per_dt p where m.p_id = p.p_id order by m.main_id  " );
		 while (maintask.next()) {
         	int m_id = maintask.getInt(1);
             String mtask = maintask.getString(2);
             String mdes = maintask.getString(3);
             int p_id = maintask.getInt(4);
              logger.info(" maintask id ||   title ||  description ||  person-id  ");
             logger.info(m_id + "\t" + mtask +"\t" + mdes + "\t" + p_id);
         }
		
		 
		 ResultSet subtask = rslt.executeQuery("select * from sub_det s " );
		 while (subtask.next()) {
         	int sub_id = subtask.getInt(1);
         	int m_id = subtask.getInt(2);
             String mtask = subtask.getString(3);
             String mdes = subtask.getString(4);
             int ehr = subtask.getInt(5);
             int p_id = subtask.getInt(6);
              logger.info(" subtaskid  ||   maintask id ||   title ||  description ||   est-hours ||  person-id  ");
             logger.info(sub_id+"\t" +m_id + "\t" + mtask +"\t" + mdes +"\t" +ehr+ "\t" + p_id);
         }
		
		persondb.close();
		
		
		
		
		
		
		
		
		

	}

}
