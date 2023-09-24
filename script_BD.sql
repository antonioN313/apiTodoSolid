create database apitodosolid;

use apitodosolid;

create table users(
	id int,
	name varchar(120),
	email varchar(254),
	password varchar(21)
);

create table tasks(
	id int,
	task varchar(128),
	description text,
	taskdate date,
	status tinyint
);

create table categories(
	id int,
	name varchar(75)
);

/* Constraints and Primary Keys*/
ALTER TABLE users add constraint PK_user_id Primary key (id);
ALTER TABLE tasks add constraint PK_tasks_id Primary key (id);
ALTER TABLE categories add constraint PK_categories_id Primary key (id);
alter table users modify column id int unsigned auto_increment;
alter table tasks modify column id int unsigned auto_increment;
alter table categories modify column id int unsigned auto_increment;

/*Foreign Keys*/
alter table users add constraint FK_tasks_id Foreign key (id) references tasks(id);
alter table Tasks add constraint FK_categories_id Foreign key (id) references categories(id);