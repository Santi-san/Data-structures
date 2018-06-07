
function Node(data){
	this.data = data;
	this.children =[];
}

function BinaryTree(){
	this.root = null;
}

BinaryTree.prototype.add = function(data,parent){
	
	var newnode = new Node(data);
	var parentNode = parent ? this.findBF(parent) : null;
	
	if(parentNode){
	parentNode.children.push(newnode);
	}else{
	  if(!this.root)
	  this.root = newnode;
	  else
	   return 'Root node already assigned';
	
	
	}
}
	
	BinaryTree.prototype.findBF = function(data){
	
	 var queue = [this.root];
	
	while(queue.length){
	var node = queue.shift();
	   if(node.data === data)
	    return node;
	   for(var i=0;i<node.children.length;i++){
	  queue.push(node.children[i])
	}
	}
	  return null; 
	}
	
	
	BinaryTree.prototype.remove = function(data){
		if(this.root.data === data)
		return	this.root = null;
		
		var queue = [this.root];
		while(queue.length){
			var node = queue.shift();
			
			for(let i=0;i<node.children.length;i++){
				if(node.children[i].data === data)
					node.children.splice(i,1);
				else
					queue.push(node.children[i]);
			}
		}
	}
/******/
var bt = new BinaryTree();

	
bt.add('CEO');
bt.add('COO','CEO');
bt.add('CFO','CEO');
bt.add('CPO','CEO');
bt.add('Manager1','CFO');
bt.add('Manager2','CFO');
bt.add('Manager3','CFO');
//bt.remove("Manager3");
	console.log(bt);
