/**
 * @author Saro Amirkhanyan
 * @param {object} ctx 
 */
Function.prototype.myBind = function (ctx, ...args) {
  let fn = Symbol('fn');
  ctx[fn] = this;
  return (...innerArgs) => args.length ? ctx[fn](...args) : ctx[fn](...innerArgs)
}
// Test
function greeting(age) {
  console.log(this.name, age)
}
greeting.myBind({
  name: "Saro",
})(99)
