export default class Queue {
  #queue;
  #size;

  constructor(arr = []) {
    this.#queue = arr;
    this.#size = arr.length;
  }

  // add ane element to queue
  push(el) {
    this.#queue.push(el);
    this.#size++;
  }

  // retrieve and remove the next element in queue
  pop() {
    this.#size--;
    return this.#queue.shift();
  }

  // return next element in queue
  front() {
    return this.#queue[0];
  }

  // return last element added to queue
  back() {
    return this.#queue[this.#size - 1];
  }

  // return size of queue
  get size() {
    return this.#size;
  }

  // return queue
  get queue() {
    return this.#queue;
  }
}