
function Node(data, next, prev) {
	this.data = data;
	this.next = next;
	this.prev = prev;
}

function DoublyLinkedList() {
	this.head = null;
	this.tail = null;
}

DoublyLinkedList.prototype.addToHead = function (data) {
	var newnode = new Node(data, this.head, null);

	if (this.head)
		this.head.prev = newnode;
	else
		this.tail = newnode;
	this.head = newnode;
}

DoublyLinkedList.prototype.addToTail = function (data) {
	var newnode = new Node(data, null, this.tail);

	if (this.tail)
		this.tail.next = newnode;
	else
		this.head = newnode;
	this.tail = newnode;
}

DoublyLinkedList.prototype.size = function () {
	var counter = 0;
	var node = this.head;
	while (node) {
		counter++;
		node = node.next;
	}
	return counter;
}

DoublyLinkedList.prototype.removeHead = function () {

	if (!this.head) return null;

	var v = this.head.data;
	this.head = this.head.next;
	if (this.head)
		this.head.prev = null;
	else
		this.tail = null;
	return v;
}

DoublyLinkedList.prototype.removeTail = function () {
	if (!this.tail) return null;

	var v = this.tail.data;
	this.tail = this.tail.prev;
	if (this.tail)
		this.tail.next = null;
	else
		this.head = null;
	return v;
}

DoublyLinkedList.prototype.getAt = function (index) {
	if (!this.head) return null;
	var count = 0;
	var node = this.head;
	while (node) {
		if (count === index)
			return node;
		count++;
		node = node.next;
	}

	return null;
}


/*************/
var ll = new DoublyLinkedList();
ll.addToHead(34);
ll.addToHead(23);
ll.addToHead(92);

console.log(ll.getAt(2));
console.log(ll);
console.log(ll.size());
