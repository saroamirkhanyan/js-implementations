  class CustomPromise {
  constructor(exec) {
    this.status = "pending";
    this.queue = [];
    const resolve = async (value) => {
      this.status = "fulfilled";
      this.value = value;
      await this.executeQueue();
    };
    const reject = (error) => {
      this.status = "rejected";
      this.value = error;
      this.catchCallback(this.value);
    };
    exec(resolve, reject);
    return this;
  }

  async executeQueue() {
    for (let callback of this.queue) {
      this.value = await callback(this.value);
    }
  }

  async then(callback) {

    if (this.queue) {
      await this.executeQueue();
    }
    if (this.status === "fulfilled") {
      this.value = await callback(this.value);
    } else if (this.status === "pending") {
      this.queue.push(callback);
    }
    return this;
  }

  catch(callback) {
    if (this.status === "rejected") {
      callback(this.value);
    } else if (this.status === "pending") {
      this.catchCallback = callback;
    }
  }
}

const promise = new CustomPromise((resolve, reject) => {
  setTimeout(resolve, 1, 10);
})
.then((x) => {
  console.log(x);
})
