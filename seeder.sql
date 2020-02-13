drop database if exists mentor_db;


use mentor_db;

-- SELECT * from mentor_db.users;
-- SELECT * from mentor_db.interests;
-- SELECT * from mentor_db.user_interest;
-- SELECT * FROM mentor_db.contacts;
-- SELECT * FROM mentor_db.messages;
-- SELECT * FROM mentor_db.ratings;
-- SELECT * FROM mentor_db.posts;


INSERT INTO users (biography, email, filestack_picture_url, first_name, last_name, is_mentor, username)
VALUES ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum est ut ante sollicitudin, a suscipit felis consequat. Nullam dignissim lobortis elit eu elementum. Cras consequat quam ac tincidunt pharetra. Donec dapibus eu sem sed congue. Nullam commodo, est ac sodales tempor, tortor neque consequat lacus, sed eleifend orci nunc ut mauris. Nulla tincidunt pretium turpis sit amet bibendum. Proin ac blandit urna. Sed eget elementum ante. Morbi porta quis metus in auctor.', 'bryhowl@emailme.me', 'alterurllater', 'Bryan', 'Howell', 0, 'bryguy'),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum est ut ante sollicitudin, a suscipit felis consequat. Nullam dignissim lobortis elit eu elementum. Cras consequat quam ac tincidunt pharetra. Donec dapibus eu sem sed congue. Nullam commodo, est ac sodales tempor, tortor neque consequat lacus, sed eleifend orci nunc ut mauris. Nulla tincidunt pretium turpis sit amet bibendum. Proin ac blandit urna. Sed eget elementum ante. Morbi porta quis metus in auctor.', 'kennywalsh@emailme.me', 'alterurllater', 'Kenneth', 'Walsh', 1, 'oldmanyoungheart');


INSERT INTO interests (name, picture_path)
VALUES ('Automotive', 'path_to_picture'), ('Financial', 'path_to_picture'), ('Health/Fitness', 'path_to_picture'), ('Beauty/Fashion', 'path_to_picture'), ('Cooking', 'path_to_picture'), ('Relationship', 'path_to_picture'), ('Handyman', 'path_to_picture'), ('Parenting', 'path_to_picture'), ('Life', 'path_to_picture'), ('Career', 'path_to_picture'), ('Outdoors', 'path_to_picture'), ('Academic', 'path_to_picture'), ('Religion/Spiritual', 'path_to_picture'), ('Technology', 'path_to_picture'), ('Music', 'path_to_picture'), ('Sports', 'path_to_picture'), ('Art', 'path_to_picture'), ('Home Economics', 'path_to_picture'), ('Self Defense', 'path_to_picture'), ('Legal', 'path_to_picture');

INSERT INTO user_interest (user_id, interest_id)
VALUES (1,1),(2,1),(1,7),(2,7);

INSERT INTO contacts (user_id, added_user_id)
VALUES (1,2);

INSERT INTO messages (body, datetime, receiver_id, sender_id)
VALUES ('Hey, interesting in learning how to change the oil on my Jeep Wrangler - thanks for any time you might have :)', '2/11/20', 2,1 );


INSERT INTO ratings (rating, giver_user_id, recipient_user_id)
VALUES (4, 1,2);

INSERT INTO posts (body, title, user_id)
VALUES ('Lorem ipsum gypsum marker maker of the longest taker inside beside downsides rawhide', 'Found this useful:',1);