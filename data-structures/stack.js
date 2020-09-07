export default class Stack {
  #stack;
  #size;

  constructor(arr = []) {
    this.#stack = arr;
    this.#size = arr.length;
  }

  // add one element onto stack
  push(el) {
    this.#stack.push(el);
    this.#size++;
  }

  // remove top element off stack
  pop() {
    this.#size--;
    return this.#stack.pop();
  }

  // return top element of stack
  top() {
    return this.#stack[this.#size - 1];
  }

  // return bottom element of stack
  bottom() {
    return this.#stack[0];
  }

  // return the size of stack
  get size() {
    return this.#size;
  }

  // return stack
  get stack() {
    return this.#stack
  }
}