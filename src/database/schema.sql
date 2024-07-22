CREATE DATABASE ETS;

USE ETS;

CREATE TABLE Employee (
  empNo INT PRIMARY KEY AUTO_INCREMENT,
  empName VARCHAR(50) NOT NULL,
  Address VARCHAR(50) NOT NULL,
  Gender CHAR(10) NOT NULL,
  Dob DATE NOT NULL,
  civilStatus TEXT NOT NULL,
  presentBranch TEXT NOT NULL,
  Position TEXT NOT NULL,
  startDate DATE NOT NULL,
  Grade TEXT NOT NULL,
  Category VARCHAR(20) NOT NULL,
  appointmentDate DATE NOT NULL
);

CREATE TABLE TransferRequest (
  empNo INT NOT NULL,
  Description VARCHAR(50) NOT NULL,
  reqDate DATE NOT NULL,
  Title VARCHAR(50) NOT NULL,
  Type VARCHAR(50) NOT NULL,
  lastRoutePosi TEXT NOT NULL,
  Status TEXT NOT NULL,
  cycleId INT NOT NULL,
  hrDecision VARCHAR(255) NOT NULL,
  hrComment VARCHAR(255) NOT NULL,
  PRIMARY KEY (empNo, cycleId),
  FOREIGN KEY (empNo) REFERENCES Employee(empNo)
);

CREATE TABLE AppealRequest (
  empNo INT NOT NULL,
  transcycleID VARCHAR(20) NOT NULL,
  Title VARCHAR(50) NOT NULL,
  description VARCHAR(50) NOT NULL,
  appealDate DATE NOT NULL,
  Type TEXT NOT NULL,
  PRIMARY KEY (empNo, transcycleID),
  FOREIGN KEY (empNo) REFERENCES Employee(empNo)
);

CREATE TABLE Dependent (
  empNo INT NOT NULL,
  depNo INT PRIMARY KEY AUTO_INCREMENT,
  depName VARCHAR(50) NOT NULL,
  Gender TEXT NOT NULL,
  Dob DATE NOT NULL,
  relationship VARCHAR(20) NOT NULL,
  FOREIGN KEY (empNo) REFERENCES Employee(empNo)
);

CREATE TABLE Role (
  roleName VARCHAR(50) PRIMARY KEY NOT NULL
);

CREATE TABLE TransferSchedule (
  empNo INT NOT NULL,
  cycleID INT NOT NULL,
  hrComment VARCHAR(50) NOT NULL,
  areaMgr1Comment VARCHAR(50) NOT NULL,
  areaMgr2Comment VARCHAR(50) NOT NULL,
  areaMgr3Comment VARCHAR(50) NOT NULL,
  PRIMARY KEY (empNo, cycleID),
  FOREIGN KEY (empNo) REFERENCES Employee(empNo)
);

CREATE TABLE UserLogin (
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  empNo INT NOT NULL,
  Privilege VARCHAR(50) NOT NULL,
  PRIMARY KEY (username),
  FOREIGN KEY (empNo) REFERENCES Employee(empNo)
);

CREATE TABLE TransferType (
  transferType VARCHAR(50) PRIMARY KEY NOT NULL
);

CREATE TABLE TransferCycle (
  cycleID INT PRIMARY KEY AUTO_INCREMENT,
  closeDate DATE NOT NULL
);

CREATE TABLE Proficiency (
  empNo INT NOT NULL,
  Proficiency1 VARCHAR(50) NOT NULL,
  Proficiency2 VARCHAR(50) NOT NULL,
  Proficiency3 VARCHAR(50) NOT NULL,
  PRIMARY KEY (empNo),
  FOREIGN KEY (empNo) REFERENCES Employee(empNo)
);

CREATE TABLE EmployeeBranchHistory (
  empNo INT NOT NULL,
  branchNo INT NOT NULL,
  startDate DATE NOT NULL,
  endDate DATE NOT NULL,
  PRIMARY KEY (empNo, branchNo),
  FOREIGN KEY (empNo) REFERENCES Employee(empNo)
);

CREATE TABLE EligibleDestination (
  empNo INT NOT NULL,
  cycleId INT NOT NULL,
  eligibleDesti VARCHAR(50) NOT NULL,
  PRIMARY KEY (empNo, cycleId),
  FOREIGN KEY (empNo) REFERENCES Employee(empNo)
);

CREATE TABLE Recommendation (
  managerID NVARCHAR(20) NOT NULL,
  Description VARCHAR(50) NOT NULL,
  cycleID INT NOT NULL,
  empNo INT NOT NULL,
  PRIMARY KEY (managerID, cycleID, empNo),
  FOREIGN KEY (empNo) REFERENCES Employee(empNo)
);

CREATE TABLE Branch (
  branchNo INT PRIMARY KEY AUTO_INCREMENT,
  branchName VARCHAR(20) NOT NULL,
  Address VARCHAR(50) NOT NULL,
  areaMgrID NVARCHAR(50) NOT NULL
);

CREATE TABLE HRMPage (
  hrmId INT PRIMARY KEY AUTO_INCREMENT,
  hrmName VARCHAR(255) NOT NULL
);

