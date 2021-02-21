/**
 * @author Saro Amirkhanyan
 * @param {Number,String} searchingItem
 */
Array.prototype.binarySearch = function (searchingItem) {
	const arr = this;
	let low = 0;
	let high = arr.length - 1;
	while (true) {
		let mid = Math.floor((low + high) / 2);
		if (searchingItem == arr[mid]) {
			return mid;
		}
		else if (searchingItem > arr[mid]) {
			low = mid + 1;
		}
		else {
			high = mid - 1;
		}
	}
}

// Test

let myArr = [1, 2, 3, 4, 5, 6];

let result = myArr.binarySearch(5);
console.log('index:', result, 'value:', myArr[result]);
