# msql_amazon
----------------------------------------------------------------------------------------------------------------------------

Description:
----------------------------------------------------------------------------------------------------------------------------
A CLI application that presents a simple storefront using a MySQL database. 

### Dependencies ###
* NPM packages to install:
* npm install inquirer
* npm install mysql
* npm install nodemon
* install those dependencies on the command line to see app functionality

### Tools ###
IDE: MySQL Workbench was used to create a bamazon db, and table: products. Aircraft to purchase populate the products table.
![image](https://user-images.githubusercontent.com/8611986/36871728-6424fbfa-1d60-11e8-9805-564a432404a4.png)

### User Input ###
Once the repo is cloned/forked and cd'd into, the database bamazonDB is created (either using MySQL Workbench or other MySQL GUI or referring to the bamazon_seeds.sql file in the repo), and NPM packages are installed (check the package.json file to make sure dependencies are added) a user can run this application by entering: nodemon bamazonCustomer.js into a terminal/command line. You will first see all products, in this case aircraft, that populate the mySQL database and the corresponding fields (item_id; product_name; department_name; price; & stock_quantity). Inquirer is used to prompt the user and take in user input.

![image](https://user-images.githubusercontent.com/8611986/36873611-39efc8fa-1d66-11e8-93e1-95917ffa100f.png)

A user can input an item_id for an aircraft using Inquirer
![image](https://user-images.githubusercontent.com/8611986/36873667-5efc8b92-1d66-11e8-9f7c-28a2415335d0.png)

If a user tries to buy more aircraft than are available, the user will be prompted to select a lesser quantity.
![image](https://user-images.githubusercontent.com/8611986/36875197-35c4e656-1d6c-11e8-8aa5-adf00138e88e.png)

