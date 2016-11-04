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


/* Creates a 'totalAmount' method for our groceryList array that runs a For Loop which 
	adds up the prices for each item in our list and returns the sum
	as the variable 'total' */

groceryList.totalAmount = function (){
	var total = 0;
		for (i = 0; i < groceryList.length; i++){
			total += groceryList[i].price;
		}
		return total.toFixed(2);
};

/* Creates a 'printedTotal' variable that makes a new DIV element, sets 
	it's inner content to a concatenation of a string and the sum of
	our groceryList prices that we generated with the totalAmount method.
	We then add this new DIV document to our HTML with the appendChild method. */

var printedTotal = document.createElement('div');

printedTotal.innerHTML = "Total: $" + groceryList.totalAmount();

document.body.appendChild(printedTotal);

