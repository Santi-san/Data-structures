function Queue(){
	this.storage=[];
	
	//enqueue
	
	this.enqueue = function(value){
		this.storage.unshift(value);
	}
	
	//dequeue
	
	this.dequeue = function(){
		if(this.storage.length === 0)
			return undefined;
		return this.storage.pop();
	}
	
	this.size = function(){
		return this.storage.length;
	}
}

var queue = new Queue();
  queue.enqueue(21);
  queue.enqueue(24);
  queue.enqueue(28);

console.log(queue.dequeue());
console.log(queue.size())
