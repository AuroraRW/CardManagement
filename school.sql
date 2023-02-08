------------------------Instruction--------------------
----1. Install sqlite on your computer or create a repl in replit website
----2. run "sqlite3 schoolDB.db" in shell
----3. run ".read school.sql"
---- ctrl D to exit
-------------------------------------------------------

-- DROP TABLE IF EXISTS teachers;
-- CREATE TABLE teachers (
--   teacher_id INTEGER PRIMARY KEY, 
--   teacher_name TEXT
-- );

-- DROP TABLE IF EXISTS courses;
-- CREATE TABLE courses (
--   course_id INTEGER PRIMARY KEY,
--   course_name TEXT NOT NULL, 
--   teacher_id INTEGER, 
--   FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id)  
-- );

-- DROP TABLE IF EXISTS students;
-- CREATE TABLE students (
--   student_id INTEGER PRIMARY KEY,
--   student_name TEXT
-- );

-- DROP TABLE IF EXISTS student_courses;
-- CREATE TABLE student_courses (
--   course_id INTEGER, 
--   student_id INTEGER, 
--   FOREIGN KEY (course_id) REFERENCES courses(course_id), 
--   FOREIGN KEY (student_id) REFERENCES students(student_id),   
--   PRIMARY KEY (course_id, student_id)
-- );

-- INSERT INTO teachers VALUES (01, 'Mrs Brown');
-- INSERT INTO teachers VALUES (02, 'Mr Tate');
-- INSERT INTO teachers VALUES (03, 'Mrs Filestone');
-- INSERT INTO teachers VALUES (04, 'Mr Zhao');

-- INSERT INTO students VALUES (01, 'Tom');
-- INSERT INTO students VALUES (02, 'Mary');
-- INSERT INTO students VALUES (03, 'Lucy');
-- INSERT INTO students VALUES (04, 'Lily');
-- INSERT INTO students VALUES (05, 'Mike');
-- INSERT INTO students VALUES (06, 'Zoe');
-- INSERT INTO students VALUES (07, 'Nancy');


-- INSERT INTO courses VALUES (01, 'Python', 03);
-- INSERT INTO courses VALUES (02, 'web development', 02);
-- INSERT INTO courses VALUES (03, 'Scratch', 01);

-- INSERT INTO student_courses VALUES (01, 02);
-- INSERT INTO student_courses VALUES (01, 03);
-- INSERT INTO student_courses VALUES (01, 05);
-- INSERT INTO student_courses VALUES (02, 05);
-- INSERT INTO student_courses VALUES (02, 06);
-- INSERT INTO student_courses VALUES (02, 01);
-- INSERT INTO student_courses VALUES (03, 04);

-- --Query 1:
-- select * from students;
-- select * from teachers;
-- select * from courses;

-- --Query 2:
-- select s.student_id, s.student_name, count(sc.course_id)
-- from students s
-- left join student_courses sc on s.student_id = sc.student_id
-- GROUP BY s.student_id;

-- --Query 3:
-- select s.student_name, c.course_name
-- from students s
-- right join student_courses sc on s.student_id = sc.student_id
-- left join courses c on sc.course_id = c.course_id

-- --Query 4:
-- select s.student_name, c.course_name, t.teacher_name
-- from students s
-- right join student_courses sc on s.student_id = sc.student_id
-- left join courses c on sc.course_id = c.course_id
-- left join teachers t on t.teacher_id = c.teacher_id


