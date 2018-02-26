var inquirer = require('inquirer')
var mysql = require('mysql')
// console.log('dogs are the best');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // user
  //password
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

});

var itemsArray = []


connection.query("SELECT product_name FROM products", function(err, res){
    if (err) throw err;
    for(var i = 0; i < res.length; i++) {
      itemsArray.push(res[i].product_name)
      console.log("Product ID: " + res[i].item_id + " | Product Name: " + res[i].product_name + " | Price: " + res[i].price);
    }
    // console.log(itemsArray)
  });

  inquirer.prompt({
    name: 'user_choice',
    message: 'Please choose whether to buy or sell:',
    type: 'list',
    choices: ["BUY", "SELL"]

    {
      message: "Please select item id of the widget you want: ",
      type: "input",
      name: "item_id",
      validate: validateInteger
    },
    {
      message: "Please enter the number of widgets you want: ",
      type: "input",
      name: "userOrderAmount",
      validate: validateInteger
    }).then(function(response){
    // console.log(response.user_choice);
    // console.log(itemsArray)
    if(response.user_choice == "BUY"){
      inquirer.prompt({
        name: 'user_choice',
        message: "Please choose an item from the selection:",
        type: 'list',
        choices: itemsArray
      }).then(function(response){
        var selection = response.user_choice;
        inquirer.prompt({
          name: 'user_choice',
          message: 'How many ' + selection + ' would you like to buy? ',
          type: 'input'
        }).then(function(response){
          console.log(response)
          var number_chosen = response.user_choice;
          console.log(number_chosen)
          // getQuantity();
        });
      });
    };
  });

  function getQuantity(){
    connection.query("SELECT stock_quantity FROM products WHERE product_name='ford';", function(err, res){
            if(err) throw err;
            console.log(res);
          });
  }
    connection.end();


