select *
from mentor_db.posts;
delete from mentor_db.posts
where id = 1;
use mentor_db;

#
DELETE from mentor_db.users
WHERE ID = 3;
#
SELECT *
from mentor_db.users;
#
# SELECT * from mentor_db.interests;
# SELECT * from mentor_db.user_interest;
# SELECT * FROM mentor_db.contacts;
# SELECT * FROM mentor_db.messages;
SELECT *
FROM mentor_db.ratings;
# SELECT * FROM mentor_db.posts;
#
#INSERT INTO users (biography, email, filestack_picture_url, first_name, last_name, is_mentor, username, password, location)
#VALUES ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum est ut ante sollicitudin, a suscipit felis consequat. Nullam dignissim lobortis elit eu elementum. Cras consequat quam ac tincidunt pharetra. Donec dapibus eu sem sed congue. Nullam commodo, est ac sodales tempor, tortor neque consequat lacus, sed eleifend orci nunc ut mauris. Nulla tincidunt pretium turpis sit amet bibendum. Proin ac blandit urna. Sed eget elementum ante. Morbi porta quis metus in auctor.', 'bryhowl@emailme.me', 'alterurllater', 'Bryan', 'Howell', 0, 'bryguy', 'password', 'San Antonio, Tx'),
#('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum est ut ante sollicitudin, a suscipit felis consequat. Nullam dignissim lobortis elit eu elementum. Cras consequat quam ac tincidunt pharetra. Donec dapibus eu sem sed congue. Nullam commodo, est ac sodales tempor, tortor neque consequat lacus, sed eleifend orci nunc ut mauris. Nulla tincidunt pretium turpis sit amet bibendum. Proin ac blandit urna. Sed eget elementum ante. Morbi porta quis metus in auctor.', 'kennywalsh@emailme.me', 'alterurllater', 'Kenneth', 'Walsh', 1, 'oldmanyoungheart', 'password', 'Houston, Tx');
#
#
# INSERT INTO interests (name, picture_path)
# VALUES ('Automotive', 'path_to_picture'), ('Financial', 'path_to_picture'), ('Health/Fitness', 'path_to_picture'), ('Beauty/Fashion', 'path_to_picture'), ('Cooking', 'path_to_picture'), ('Relationship', 'path_to_picture'), ('Handyman', 'path_to_picture'), ('Parenting', 'path_to_picture'), ('Life', 'path_to_picture'), ('Career', 'path_to_picture'), ('Outdoors', 'path_to_picture'), ('Academic', 'path_to_picture'), ('Religion/Spiritual', 'path_to_picture'), ('Technology', 'path_to_picture'), ('Music', 'path_to_picture'), ('Sports', 'path_to_picture'), ('Art', 'path_to_picture'), ('Home Economics', 'path_to_picture'), ('Self Defense', 'path_to_picture'), ('Legal', 'path_to_picture');
#
# INSERT INTO user_interest (user_id, interest_id)
# VALUES (1,1),(2,1),(1,7),(2,7);
#
# INSERT INTO contacts (list_owner_id, added_user_id)
# VALUES (1,2);
#
# INSERT INTO messages (body, datetime, receiver_id, sender_id)
# VALUES ('Hey, interesting in learning how to change the oil on my Jeep Wrangler - thanks for any time you might have :)', '2/11/20', 2,1 );
#
#
# INSERT INTO ratings (rating, giver_user_id, recipient_user_id)
# VALUES (5, 1,2);
#
# INSERT INTO posts (body, title, user_id)
# VALUES ('Lorem ipsum gypsum marker maker of the longest taker inside beside downsides rawhide', 'Found this useful:',1);
#
#
# # kells zone below
#
# SELECT * FROM ratings WHERE recipient_user_id = ?1;
#
INSERT INTO ratings (rating, giver_user_id, recipient_user_id)
VALUES (5, 2, 1);
#
# SELECT * FROM users where LOWER(first_name) like "%kenneth%";
#
# SELECT * FROM interests where LOWER(name) LIKE "%beau%";
#
# SELECT * FROM users WHERE is_mentor = true;
#
# SELECT first_name FROM users WHERE id IN(
#   select name
#   from interests
#   where interests.name = "Automotive"
#   );
#

DELETE from mentor_db.posts
WHERE ID >= 5;


UPDATE mentor_db.ratings
SET
  recipient_user_id = 8
WHERE
  id = 2;
INSERT INTO interests (name, picture_path)
VALUES ('Automotive', '/img/svg/002-brake.svg'), ('Financial', '/img/svg/005-coin.svg'),
  ('Health/Fitness', '/img/svg/008-muscle.svg'), ('Beauty/Fashion', '/img/svg/013-makeover.svg'),
  ('Cooking', '/img/svg/014-cooking.svg'), ('Relationship', '/img/svg/015-relationship.svg'),
  ('Handyman', '/img/svg/017-hammer.svg'), ('Parenting', '/img/svg/018-baby-boy.svg'),
  ('Life', '/img/svg/021-selection.svg'), ('Career', '/img/svg/020-revenue.svg'),
  ('Outdoors', '/img/svg/023-compass.svg'), ('Academic', '/img/svg/024-study.svg'),
  ('Religion/Spiritual', '/img/svg/027-praying.svg'), ('Technology', '/img/svg/016-laptop.svg'),
  ('Music', '/img/svg/031-music-1.svg'), ('Sports', '/img/svg/032-cup.svg'), ('Art', '/img/svg/033-palette.svg'),
  ('Home Economics', '/img/svg/036-sewing-machine.svg'), ('Self Defense', '/img/svg/038-boxing-gloves-1.svg'),
  ('Legal', '/img/svg/040-law.svg');

# live sql will have to be adjusted vvvv
SET session sql_mode = (SELECT REPLACE(@@sql_mode, 'ONLY_FULL_GROUP_BY', ''));


SELECT
  first_name,
  last_name,
  filestack_picture_url,
  avg(ratings.rating)
from users
  join ratings on users.id = ratings.recipient_user_id
where users.first_name LIKE :kellsey or users.last_name LIKE :kellsey or location LIKE :kellsey;


SELECT *
FROM users
  join ratings on users.id = ratings.recipient_user_id
  join user_interest u on users.id = u.user_id
  join interests on u.interest_id = interests.id
where users.first_name
      LIKE :myInput or users.last_name
                       LIKE :myInput or location
                                        LIKE :myInput or interests.name
                                                         like :myInput;


SELECT *
FROM users
where users.is_mentor = :isMentor;


select *
from users
where is_mentor = true;

drop database if exists mentor_db;

# SELECT distinct users.first_name, users.last_name, users.filestack_picture_url, avg(ratings.rating) from users join ratings on users.id = ratings.recipient_user_id join user_interest u on users.id = u.user_id join interests on u.interest_id = interests.id where users.first_name LIKE :kellsey or users.last_name LIKE :kellsey or location LIKE :kellsey or interests.name like :kellsey ;
#
# SELECT distinct users.first_name, users.last_name, users.filestack_picture_url, avg(ratings.rating) FROM users join ratings on users.id = ratings.recipient_user_id join user_interest u on users.id = u.user_id join interests on u.interest_id = interests.id where users.first_name LIKE :myInput or users.last_name LIKE :myInput or location LIKE :myInput or interests.name like :myInput;


#the seeder for interests with icons
INSERT INTO interests (name, picture_path)
VALUES ('Automotive', '/img/svg/002-brake.svg'), ('Financial', '/img/svg/005-coin.svg'),
  ('Health/Fitness', '/img/svg/008-muscle.svg'), ('Beauty/Fashion', '/img/svg/013-makeover.svg'),
  ('Cooking', '/img/svg/014-cooking.svg'), ('Relationship', '/img/svg/015-relationship.svg'),
  ('Handyman', '/img/svg/017-hammer.svg'), ('Parenting', '/img/svg/018-baby-boy.svg'),
  ('Life', '/img/svg/021-selection.svg'), ('Career', '/img/svg/020-revenue.svg'),
  ('Outdoors', '/img/svg/023-compass.svg'), ('Academic', '/img/svg/024-study.svg'),
  ('Religion/Spiritual', '/img/svg/027-praying.svg'), ('Technology', '/img/svg/016-laptop.svg'),
  ('Music', '/img/svg/031-music-1.svg'), ('Sports', '/img/svg/032-cup.svg'), ('Art', '/img/svg/033-palette.svg'),
  ('Home Economics', '/img/svg/036-sewing-machine.svg'), ('Self Defense', '/img/svg/038-boxing-gloves-1.svg'),
  ('Legal', '/img/svg/040-law.svg');

