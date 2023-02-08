------------------------Instruction--------------------
----1. Install sqlite on your computer or create a repl in replit website
----2. run "sqlite3 cardsDB.db" in shell
----3. run ".read main.sql"
---- ctrl D to exit
-------------------------------------------------------

-- DROP TABLE IF EXISTS cards;
-- CREATE TABLE cards (
-- 	card_id INTEGER PRIMARY KEY,
-- 	name TEXT NOT NULL,
-- 	description TEXT NOT NULL,
-- 	imageurl TEXT NOT NULL,
-- 	level INTEGER NOT NULL,
--   point INTEGER NOT NULL
-- );

-- INSERT INTO cards VALUES (0001, 'Mary', 
--   'Manager', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 11, 2345);
-- INSERT INTO cards VALUES (0002, 'Lily', 
--   'Developer', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 7, 1234);
-- INSERT INTO cards VALUES (0003, 'Lucy', 
--   'QA', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 9, 4321);
-- INSERT INTO cards VALUES (0004, 'Mike', 
--   'Developer', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 15, 2323);
-- INSERT INTO cards VALUES (0005, 'Tom', 
--   'Manager', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 2, 3456);
-- INSERT INTO cards VALUES (0006, 'Jack', 
--   'QA', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 5, 6543);
-- INSERT INTO cards VALUES (0007, 'Jason', 
--   'Manager', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 12, 5767);
-- INSERT INTO cards VALUES (0008, 'Ann', 
--   'Developer', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 7, 8756);
-- INSERT INTO cards VALUES (0009, 'Zoe', 
--   'Manager', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 7, 2345);
-- INSERT INTO cards VALUES (0010, 'Judy', 
--   'Developer', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 9, 1536);
-- INSERT INTO cards VALUES (0011, 'Hellen', 
--   'QA', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 4, 5785);
-- INSERT INTO cards VALUES (0012, 'Victory', 
--   'QA', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 16, 3333);
-- INSERT INTO cards VALUES (0013, 'Vicy', 
--   'Developer', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 17, 2345);
-- INSERT INTO cards VALUES (0014, 'Wendy', 
--   'Developer', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 13, 1346);
-- INSERT INTO cards VALUES (0015, 'Bob', 
--   'QA', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 15, 8765);
-- INSERT INTO cards VALUES (0016, 'Cindy', 
--   'QA', 'https://cdn-icons-png.flaticon.com/512/147/147144.png', 11, 1357);


-- --Query 1:
-- select * from cards;

-- --Query 2:
-- select * from cards
-- where point > 2000

-- --Query 3:
-- select description, count(card_id), avg(level) from cards
-- where point > 2000
-- group by description

-- --Query 4:
-- select description, count(card_id), avg(level) from cards
-- where point > 2000
-- group by description
-- having avg(level)>9

-- --Query 5:
-- select description, count(card_id), avg(level) from cards
-- where point > 2000
-- group by description
-- having avg(level)>9
-- order by avg(level) asc

