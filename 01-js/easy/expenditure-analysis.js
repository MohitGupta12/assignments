/*
Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
and return a list of objects where each object is unique category-wise and has total price spent as its value.
transactions is an array where each
Transaction - an object like
	{
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
	const result = [];
	transactions.map((transaction) => {
		const category = transaction.category;
		const price = transaction.price;
		const newObj = {
			"category": category,
			"totalSpent" : price
		}
		let isPresent = false
		if(result.length === 0){
			result.push(newObj)
		}else{
			result.map((elem)=>{
				if(elem.category === category){
					isPresent = true;
				}
			});
			if(isPresent){
				result.forEach( (elem)=>{
					if(elem.category === category){
						elem.totalSpent += price;
					}
				});
			}else{
				result.push(newObj)
			}
		}
	})
	return result;
}

module.exports = calculateTotalSpentByCategory;


console.log(calculateTotalSpentByCategory([
	{
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},{
		id: 2,
		timestamp: 165607800000,
		price: 30,
		category: 'Fod',
		itemName: 'Pizza',
	},
	{
		id: 3,
		timestamp: 16576800000,
		price: 10,
		category: 'fff',
		itemName: 'Pizza',
	},
	{
		id: 4,
		timestamp: 16560768000,
		price: 30,
		category: 'Food',
		itemName: 'Pizza',
	},
]));