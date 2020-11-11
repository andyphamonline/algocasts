// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack')

class Queue {
	constructor() {
		this.records = new Stack()
		this.temp = new Stack()
	}

	reverse(pushStack, popStack) {
		while (popStack.peek()) {
			pushStack.push(popStack.pop())
		}
	}

	add(num) {
		this.reverse(this.temp, this.records)

		this.records.push(num)

		this.reverse(this.records, this.temp)
	}

	remove() {
		return this.records.pop()
	}

	peek() {
		return this.records.peek()
	}
}

module.exports = Queue
