function map(fn) {
  const array = this;
  const result = [];
  for (let i in array) {
    const item = array[i]
    const mapped_value = fn(item, i, array)
    result.push(mapped_value)
  }
  return result;
}

//connect to Array.prototype
Object.assign(Array.prototype, { map });

//test

const squad = x => x * x

const array = [3, 5, 1]
const result = array.map(squad);

console.log(result);
