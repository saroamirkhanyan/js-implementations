// Definition
Object.prototype.take = function (strings) {
	const properties = strings.raw[0].replace(/[\n\s]/g, '').split(',')
	const newObject = {}
	for(let property in this) {
		if(properties.includes(property)) {
			newObject[property] = this[property]
		}
	}
	return newObject;
}


// Test
const user = {name:"Saro",lastName:"Amirkhanyan"}
console.log(
user.take`
	name,
`
)
