class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		var counter = 0;
		var node = this.head;
		while (node) {
			counter++;
			node = node.next;
		}
		return counter;
	}

	getFirst() {
		return this.head.data;
	}

	getLast() {
		if (!this.head)
			return null;

		let node = this.head;
		while (node) {
			if (!node.next)
				return node;
			node = node.next;
		}

	}

	removeFirst() {
		if (!this.head) {
			return;
		}

		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head || !this.head.next)
			return this.head;
		let previous = this.head;
		let node = this.head.next;

		while (node.next) {
			previous = node;
			node = node.next;
		}
		var v = previous.next;
		previous.next = null;
		return v;
	}

	getAt(index) {
		var counter = 0;
		var node = this.head;

		while (node) {
			if (counter === index)
				return node;
			counter++;
			node = node.next;
		}
		return null;
	}
	removeAt(index) {
		if (!this.head)
			return null;
		else if (index === 0) {
			this.head = this.head.next;
			return
		} else {
			var ref = this.getAt(index - 1);
			if (!ref || !ref.next) {
				return;
			}
			ref.next = ref.next.next;
		}

	}
	insertAt(data, index) {
		if (!this.head)
			this.head = new Node(data, this.head);
		if (index === 0) {
			this.head = new Node(data, this.head);
			return
		}
		const previous = this.getAt(index - 1) || this.getLast();
		const node = new Node(data, previous.next);
		previous.next = node;
	}
}


//*************//

var list = new LinkedList();
list.insertFirst(30);
// list.insertFirst(60);
// list.insertFirst(80);



console.log(list.getLast());
// console.log(list);
// console.log(list.size());
