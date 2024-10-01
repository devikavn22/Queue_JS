class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty--Underflow";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty -- Underflow";
    }
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  printQueue() {
    return this.items.toString();
  }
}

const queue = new Queue();
queue.enqueue(20);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.printQueue()); // 20,40,50
console.log(queue.front()); // Output: 20
queue.dequeue();
console.log(queue.front()); // Output: 40
console.log(queue.printQueue()); // Output: 40,50
