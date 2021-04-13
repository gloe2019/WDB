/* Map Practice
- Define a function called `cleanNames`. It should accept an array of strings which may contain additional space characters at the beginning and end. 
- The `cleanNames` function should use the array map method to return a new array, full of trimmed names.
*/
function cleanNames(arr) {
	return arr.map(function (el) {
		return el.trim();
	});
}
/* Code Explanation:
An array is passed to the cleanNames function as arr. arr is mapped over and each item is trimmed and returned to make a new array with the trimmed items.
This new array is then returned. */
