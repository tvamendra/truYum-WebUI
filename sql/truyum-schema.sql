drop database if exists truyum;
create database truyum;
use truyum;
create table menu_item (
	menu_id int primary key,
    menu_name varchar(50) not null,
    price decimal(6,2) not null,
    activate varchar(3) not null,
    dateL date not null,
    category varchar(20) not null,
    FreeD varchar(3) not null
);

desc menu_item;

create table user (
	user_id int primary key,
    user_name varchar(50) not null
);
desc user;
create table cart(
	cart_id int primary key,
    user_id int references user(user_id),
    menu_id int references menu_item(menu_id)
);
desc cart;
show tables;

