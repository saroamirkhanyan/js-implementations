/**
 * @author Saro Amirkhanyan
 * @param {Number,String} searchingItem
 */
Array.prototype.binarySearch = function (searchingItem) {
	const arr = this;
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
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
	return -1;
}

// Test

let myArr = [1, 2, 3, 4, 5, 6];

console.log("3 index:", myArr.binarySearch(3)); //3 index: 2
console.log("6 index:", myArr.binarySearch(6)); // 6 index: 5
console.log("64 inded:", myArr.binarySearch(64)); // 64 inded: -1
