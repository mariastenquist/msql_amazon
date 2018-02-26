DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price FLOAT(10, 2) NULL,
  stock_quantity INT(15) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lambo", "cars", 250000.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("aston martin", "cars", 50000.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("porche", "cars", 80000.00, 220);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("matrix", "cars", 18000.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tacoma", "cars", 30000.00, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ford", "cars", 25000.00, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ford", "cars", 25000.00, 150);


