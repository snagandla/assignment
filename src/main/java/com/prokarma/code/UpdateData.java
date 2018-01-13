package com.prokarma.code;

import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

import org.apache.log4j.Logger;

public class UpdateData {
	private static org.apache.log4j.Logger logger = Logger.getLogger(UpdateData.class);
	final static org.apache.log4j.Logger stndLog = Logger.getLogger("logger.file");

	public static void main() throws SQLException, IOException {
		
			Connection persondb = DBconnection.main();
			logger.info(" enter the maintask name to be changed ");
			Scanner scanner = new Scanner(System.in);
			String maintask = scanner.nextLine();
			String mtask = null;
			Statement rslt = persondb.createStatement();
			ResultSet resultset = rslt
					.executeQuery("select main_title from main_det where main_title =  '" + maintask + "'");

			if (resultset.next()) {
				mtask = resultset.getString(1);
			}

			if (mtask != null) {

				logger.info("enter  modified main task name ");
				String maintitle = scanner.nextLine();

				logger.info(" enter maintask description");
				String maindes = scanner.nextLine();

				CallableStatement stmt = persondb
						.prepareCall("{call  update main_det set main_title= ? , main_des = ? where main_title = ?}");
				stmt.setString(1, maintitle);
				stmt.setString(2, maindes);
				stmt.setString(3, maintask);
				stmt.execute();

			}

			persondb.close();
		
	}

}
