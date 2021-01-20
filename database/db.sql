CREATE DATABASE database_links;

USE database_links;

CREATE TABLE users(
    id int(11) not null primary key,
    username varchar(16) not null,
    password varchar(60) not null,
    fullname varchar(100) not null
);

ALTER TABLE users
    MODIFY id int (11) not null AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

--LINKS TABLE
create table links (
    ind int(11) not null,
    title varchar(150) not null,
    url varchar(255) not null,
    description text,
    user_id int(11),
    created_at timestamp not null default current_timestamp,
    constraint fk_user foreign key (user_id) references users(id)
);

ALTER TABLE links 
RENAME COLUMN ind TO id;

alter table links
add primary key (id);

alter table links
modify id int(11) not null AUTO_INCREMENT, AUTO_INCREMENT = 2;