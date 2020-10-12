async function all(promises) {
  const result = [];
  for (let i in promises) {
    const promise = await promises[i];
    result.push(promise)
    if (i == promises.length - 1) {
      return result;
    }
  }
}
// connect function all to Promise
Object.assign(Promise, { all })


//test

const promise1 = new Promise((res) => {
  setTimeout(() => res("hello world"), 500);
});

const promise2 = new Promise((res) => {
  setTimeout(() => res("hi"), 2000);
});

Promise.all([promise1, promise2]).then((promises) => {
  console.log(promises);
});
