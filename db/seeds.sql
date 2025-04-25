\c employee_db;

-- Insert data into department table
INSERT INTO department (name) VALUES
('Sales'),
('Engineering'),
('Finance'),
('Marketing');

-- Insert data into role table
INSERT INTO role (title, salary, department_id) VALUES
('Sales Manager', 80000, 1),
('Software Engineer', 90000, 2),
('Data Analyst', 70000, 3),
('Marketing Specialist', 60000, 4);

-- Insert data into employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Emily', 'Jones', 3, 1),
('Michael', 'Brown', 4, 2),
('Sarah', 'Davis', 1, 3);