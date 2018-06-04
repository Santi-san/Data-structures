function Stack(){
	  this.storage = [];
	  
	  //push method
	  
	  this.push=function(value){
		  this.storage.push(value);
		  
	  }
	  
	  //pop method
	  this.pop = function(){
		  if(this.storage.length === 0)
			  return undefined;
		
		  return this.storage.pop();
		  
	  }
	  //peek method
	  this.peek = function(){
		  return this.storage[this.storage.length-1];
	  }
	  
	  //size method
	  this.size=function(){
		  return this.storage.length;
	  }
  }


var stack1 =new Stack();
stack1.push(23);
stack1.push(24);
stack1.push(25);

console.log(stack1.pop());
console.log(stack1.size());

console.log(stack1);
