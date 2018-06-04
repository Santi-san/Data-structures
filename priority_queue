function PriortyOueue(){
	this.storage=[];
	
	
	this.size = function(){
		return this.storage.length;
	}
	
	this.enqueue = function(arr){
		if(this.size === 0){
			this.storage.push(arr);
		}else{
			var ref = false;
			for(let i=0;i<this.storage.length;i++){
				if(arr[1] < this.storage[i][1]){
					this.storage.splice(i,0,arr);
					ref = true;
					break;
				}
			}
			if(!ref){
				this.storage.push(arr);
			}
		}
	}
}

var priority = new PriortyOueue();

priority.enqueue(['Sam',4]);
priority.enqueue(['Ram',6]);
priority.enqueue(['John',3]);
priority.enqueue(['Santi',3]);
console.log(priority.storage);
console.log(priority.size())
