CREATE TABLE `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE TABLE `messages` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `authorID` int(11) NOT NULL,
  `text` varchar(1000) NOT NULL,
  PRIMARY KEY (`ID`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`authorID`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO users (name) VALUES ("Austin");
INSERT INTO messages (authorID, text) VALUES (( SELECT ID from users where name = 'Austin'), "This message was created during the database seed");
INSERT INTO messages (authorID, text) VALUES (( SELECT ID from users where name = 'Austin'), "This message was also created during the database seed");