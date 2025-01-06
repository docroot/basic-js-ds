const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first_node = null;
  }
  getUnderlyingList() {
    return this.first_node;
  }

  enqueue(value) {
    if(this.first_node === null) {
      this.first_node = new ListNode(value);
      return;
    }
    let cur_node = this.first_node;
    while(cur_node.next) {
      cur_node = cur_node.next;
    }
    cur_node.next = new ListNode(value);
  }

  dequeue() {
    if(this.first_node) {
      let res = this.first_node;
      this.first_node = this.first_node.next;
      return res.value;
    }
    return undefined;
  }
}

module.exports = {
  Queue
};
