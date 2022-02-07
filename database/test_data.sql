insert into users (username, password, created_at, updated_at) values ('admin', 'secret', now(), now());

insert into contacts (user_id, name, dob, phone, address, credit_card, franchise, email , created_at, updated_at)
values
(2, 'test1', '2022-02-07', '123', 'test address1', '11111', 'test', 'test1@example.com', now(), now()),
(2, 'test2', '2022-02-07', '123', 'test address1', '11111', 'test', 'test2@example.com', now(), now()),
(2, 'test3', '2022-02-07', '123', 'test address1', '11111', 'test', 'test3@example.com', now(), now()),
(2, 'test4', '2022-02-07', '123', 'test address1', '11111', 'test', 'test4@example.com', now(), now()),
(2, 'test5', '2022-02-07', '123', 'test address1', '11111', 'test', 'test5@example.com', now(), now());

insert into contact_files
(user_id, original_filename, location, key, state, created_at, updated_at)
values
(2, 'test', 'test', 'test', 'on hold', now(), now());