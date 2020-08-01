show databases;

use truyum;

show tables;

-- 1.a Insert values in menu-item

insert into menu_item 
values(1,"Sandwich",99.00,"Yes","2017-03-15","Main Course","Yes"),
(2,"Burger",129.00,"Yes","2017-12-23","Main Course","No"),
(3,"Pizza",149.00,"Yes","2017-08-21","Main Course","No"),
(4,"French Fries",57.00,"No","2017-07-02","Starters","Yes"),
(5,"Chocolate Brownie",32.00,"Yes","2022-11-02","Dessert","Yes");


-- 1.b getting all values from menu-item
select * from menu_item; 

-- 2 Select values which are launched and are active
select * from menu_item
where dateL<=curdate() and activate="Yes"; 

-- 3.a query to get menu items based on id
select * from menu_item
where menu_id=4;

-- 3.b query to update all columns based on id value;
update menu_item
set menu_name="Pasta",price=165.00, activate="Yes", dateL="2020-07-30" ,category="Main Course" , FreeD="No"
where menu_id=4;

select * from menu_item;

-- 4. Insert values in user and cart : 2 users in user table and one user having no menu item but other one having 3 menu items in cart table
insert into user
values(1,"Ram"),(2,"Tom");

select * from user;

insert into cart
values(1,1,null),(2,2,2),(3,2,4),(4,2,5);

select * from cart;

-- 5.a SQL query to get all menu items in a particular user’s cart
select c.user_id, u.user_name, c.menu_id
from cart as c join user as u on (c.user_id=u.user_id); 

-- 5.b SQL query to get the total price of all menu items in a particular user's cart

select c.user_id, u.user_name, sum(m.price) as total_price
from cart as c join user as u on (c.user_id=u.user_id)
join menu_item as m on(c.menu_id=m.menu_id)
group by c.user_id;

-- 6. Frame SQL query to remove a menu items from Cart based on User Id and Menu Item Id
select * from cart;

delete from cart 
where user_id=2 and menu_id=4;

select * from cart;
