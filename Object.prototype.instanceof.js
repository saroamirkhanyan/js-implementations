/* Code */
/**
@param {function} parentClass
*/
Object.prototype.instanceof = function (parentClass) {
	let current = this.__proto__;
	while (current) {
		if(current.constructor == parentClass) {
			return true;
		}
		current = current.__proto__;
	}
	return false;
}

// Test
class Animal {}

class Person {}

const dog = new Animal();

console.log(dog.instanceof(Animal)) // true
console.log(dog.instanceof(Person)) // false

