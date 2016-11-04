//this is my grocery list Array

var groceryList = [
		{
			name: 'Eggs',
			price: 2.19
		},
		{
			name: 'Milk',
			price: 2.12
		},
		{
			name: 'Cereal',
			price: 3.99
		},
		{
			name: 'Bread',
			price: 2.99
		},
		{
			name: 'Cheese',
			price: 4.99
		}
	];	


/*
 for each item
   create the HTML string for that item. ex: <li>Eggs $2.50</li>
   concatenate that to the big long string
 now I have a big long string. I can set that as the innerHTML.

*/

/* For Loop that captures the values of the 'Name' and 'Price' properties 
    in our groceryList array and returns them as a DIV 
    in our HTML document using the variable printedList*/

for (var i = 0; i<groceryList.length; i++){
	console.log(groceryList[i].name + ': $' + groceryList[i].price.toFixed(2));
	
	var printedList = document.createElement('div');

	printedList.innerHTML = groceryList[i].name + ': $' + groceryList[i].price.toFixed(2);

	document.body.appendChild(printedList);

};


/*Creates a 'totalAmount' method for our groceryList array that runs a For Loop which 
	adds up the prices for each item in our list and returns the sum
	as the variable 'total' */

groceryList.totalAmount = function (){
	var total = 0;
		for (i = 0; i < groceryList.length; i++){
			total += groceryList[i].price;
		}
		return total.toFixed(2);
};


var printedTotal = document.createElement('div');

printedTotal.innerHTML = "Total: $" + groceryList.totalAmount();

document.body.appendChild(printedTotal);


// this is a For loop that adds up the prices of each item

// var total = 0;

// for (var i = 0; i < groceryList.length; i++){
// 	total += groceryList[i].price;
// }

// console.log("Total: $" + total.toFixed(2))


//this is my script for appending a new html element

// function addToList (){
// 	var newItemName = document.getElementById('itemName').value;
// 	var newItemPrice = document.getElementById('itemPrice').value;
// }

// var obj = {
// 	name: newItemName,
// 	price: newItemPrice
// }

// groceryList.push(obj);

// printedList.innerHTML = "<li>Eggs $2.50</li><li>Broccoli $3.00</li>";

