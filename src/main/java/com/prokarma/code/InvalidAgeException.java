package com.prokarma.code;

import org.apache.log4j.Logger;

public class InvalidAgeException extends Exception {
	private static org.apache.log4j.Logger logger = Logger.getLogger(InvalidAgeException.class);
	final static org.apache.log4j.Logger  stndLog = Logger.getLogger("logger.file");
public InvalidAgeException() {
	logger.info("age entered is invalid for task assigned");
	stndLog.error("age entered is invalid for task assigned");
}
}
