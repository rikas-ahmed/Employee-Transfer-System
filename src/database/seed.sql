INSERT INTO Employee (empNo, empName, Address, Gender, Dob, civilStatus, presentBranch, Position, startDate, Grade, Category, appointmentDate)
VALUES 
(1, 'Admin User', '123 Admin St', 'M', '1970-01-01', 'Married', 'Head Office', 'Admin', '2000-01-01', 'A', 'Full-time', '1990-01-01'),
(2, 'HR John', '456 HR St', 'M', '1980-02-02', 'Married', 'Head Office', 'HR Manager', '2010-02-01', 'B', 'Full-time', '2005-02-01'),
(3, 'HR Jane', '789 HR St', 'F', '1985-03-03', 'Unmarried', 'Head Office', 'HR Assistant', '2012-03-01', 'B', 'Full-time', '2008-03-01'),
(4, 'HR Emily', '101 HR St', 'F', '1988-04-04', 'Married', 'Head Office', 'HR Manager', '2014-04-01', 'B', 'Full-time', '2009-04-01'),
(5, 'Area Manager Alex', '102 Area St', 'M', '1975-05-05', 'Married', 'Area 1', 'Area Manager', '2005-05-01', 'A', 'Full-time', '1995-05-01'),
(6, 'Area Manager Kate', '103 Area St', 'F', '1980-06-06', 'Married', 'Area 2', 'Area Manager', '2008-06-01', 'A', 'Full-time', '1998-06-01'),
(7, 'Area Manager Luke', '104 Area St', 'M', '1983-07-07', 'Unmarried', 'Area 3', 'Area Manager', '2010-07-01', 'A', 'Full-time', '2000-07-01'),
(8, 'Teller Tom', '111 Bank St', 'M', '1990-06-06', 'Married', 'Branch A', 'Teller', '2015-06-01', 'C', 'Full-time', '2010-06-01'),
(9, 'Clerk Mary', '222 Bank St', 'F', '1992-07-07', 'Unmarried', 'Branch A', 'Clerk', '2016-07-01', 'C', 'Full-time', '2011-07-01'),
(10, 'Officer Alex', '333 Bank St', 'M', '1988-08-08', 'Married', 'Branch B', 'Officer', '2014-08-01', 'B', 'Full-time', '2009-08-01'),
(11, 'Assistant Lisa', '444 Bank St', 'F', '1994-09-09', 'Unmarried', 'Branch B', 'Assistant', '2017-09-01', 'C', 'Full-time', '2012-09-01'),
(12, 'Analyst John', '555 Bank St', 'M', '1989-10-10', 'Married', 'Branch C', 'Analyst', '2013-10-01', 'B', 'Full-time', '2008-10-01'),
(13, 'Specialist Eve', '666 Bank St', 'F', '1991-11-11', 'Unmarried', 'Branch C', 'Specialist', '2018-11-01', 'C', 'Full-time', '2013-11-01'),
(14, 'Consultant Dave', '777 Bank St', 'M', '1987-12-12', 'Married', 'Branch D', 'Consultant', '2012-12-01', 'B', 'Full-time', '2007-12-01');

INSERT INTO TransferRequest (empNo, Description, reqDate, Title, Type, lastRoutePosi, Status, cycleId, hrDecision, hrComment)
VALUES 
(8, 'Request for transfer due to personal reasons', '2024-06-01', 'Teller', 'Personal', 'Branch A', 'Pending', 1, 'Pending', 'Awaiting decision'),
(10, 'Request for transfer due to medical reasons', '2024-06-05', 'Officer', 'Medical', 'Branch B', 'Pending', 2, 'Pending', 'Awaiting decision'),
(12, 'Request for transfer due to family reasons', '2024-06-10', 'Analyst', 'Personal', 'Branch C', 'Pending', 1, 'Pending', 'Awaiting decision'),
(14, 'Request for transfer due to career growth', '2024-06-15', 'Consultant', 'Routine', 'Branch D', 'Pending', 2, 'Pending', 'Awaiting decision');

INSERT INTO AppealRequest (empNo, transcycleID, Title, description, appealDate, Type)
VALUES 
(8, '1', 'Teller', 'Appeal for denied transfer request', '2024-06-10', 'Medical'),
(10, '2', 'Officer', 'Appeal for denied transfer request', '2024-06-12', 'Personal');

INSERT INTO Dependent (empNo, depNo, depName, Gender, Dob, relationship)
VALUES 
(8, 1, 'Emily Tom', 'F', '2015-01-01', 'Daughter'),
(10, 2, 'John Alex Jr.', 'M', '2012-02-02', 'Son'),
(12, 3, 'Anna John', 'F', '2015-03-03', 'Daughter'),
(14, 4, 'Dave Jr.', 'M', '2010-04-04', 'Son');

INSERT INTO Role (roleName)
VALUES 
('Admin'),
('HR Manager'),
('HR Assistant'),
('Area Manager'),
('Teller'),
('Clerk'),
('Officer'),
('Assistant'),
('Analyst'),
('Specialist'),
('Consultant');

INSERT INTO TransferSchedule (empNo, cycleID, hrComment, areaMgr1Comment, areaMgr2Comment, areaMgr3Comment)
VALUES 
(8, 1, 'HR Comment', 'Area Manager 1 Comment', 'Area Manager 2 Comment', 'Area Manager 3 Comment'),
(10, 2, 'HR Comment', 'Area Manager 1 Comment', 'Area Manager 2 Comment', 'Area Manager 3 Comment');

INSERT INTO UserLogin (username, password, empNo, Privilege)
VALUES 
('admin', 'adminpassword', 1, 'Admin'),
('hrjohn', 'hrpassword123', 2, 'HR'),
('hrjane', 'hrpassword456', 3, 'HR'),
('hremily', 'hrpassword789', 4, 'HR'),
('areamanageralex', 'areapassword123', 5, 'Area Manager'),
('areamanagerkate', 'areapassword456', 6, 'Area Manager'),
('areamanagerluke', 'areapassword789', 7, 'Area Manager');

INSERT INTO TransferType (transferType)
VALUES 
('Routine'),
('Medical'),
('Personal');

INSERT INTO TransferCycle (cycleID, closeDate)
VALUES 
(1, '2024-12-31'),
(2, '2025-12-31');

INSERT INTO Proficiency (empNo, Proficiency1, Proficiency2, Proficiency3)
VALUES 
(8, 'Cash Handling', 'Customer Service', 'Accuracy'),
(10, 'Data Entry', 'Organizational Skills', 'Attention to Detail'),
(12, 'Financial Analysis', 'Risk Management', 'Communication Skills'),
(14, 'Clerical Work', 'Teamwork', 'Problem Solving');

INSERT INTO EmployeeBranchHistory (empNo, branchNo, startDate, endDate)
VALUES 
(8, 1, '2015-06-01', '2024-06-01'),
(10, 1, '2016-07-01', '2025-07-01'),
(12, 2, '2014-08-01', '2024-08-01'),
(14, 2, '2017-09-01', '2025-09-01');

INSERT INTO EligibleDestination (empNo, cycleId, eligibleDesti)
VALUES 
(8, 1, 'Branch C'),
(10, 2, 'Branch D'),
(12, 1, 'Branch E'),
(14, 2, 'Branch F');
