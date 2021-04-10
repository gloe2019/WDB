/* Tips:
- There will be a while loop requesting for input - as long as exit is not keyed in, the loop will continue. 
- The to do list will be stored in an array
*/
const todoItem = ["Delete this", "Thisonetoo"];
let input = prompt("What would you like to do?");
while (input !== "exit") {
	if (input === "list") {
		console.log("**************");
		for (let i = 0; i < todoItem.length; i++) {
			console.log(`${i}: ${todoItem[i]}`);
		}
		console.log("******************");
	} else if (input === "new") {
		const newItem = prompt("Enter a new item to the list");
		todoItem.push(newItem);
		console.log(`${newItem} added to the list`);
	} else if (input === "delete") {
		const deleteItem = parseInt(prompt("enter an index to delete"));
		if (!Number.isNaN(deleteItem)) {
			const deleted = todoItem.splice(deleteItem, 1);
			console.log(`You've chosen to delete ${deleted[0]}`);
		} else {
			console.log("Unknown index");
		}
	}
	input = prompt("Do something");
}
console.log("You've quit the App.");
