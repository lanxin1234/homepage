function Game(){
	this.rowAmount = 16;
	this.colAmount = 16;
	this.init();
	this.snake = new Snake(this);
	this.food = new  Food(this);
	this.start();
	this.bindEvent();
}
Game.prototype.init = function(){
	this.dom = document.createElement("table");
	for(var i = 0; i <this.rowAmount; i++){
		var tr,td;
		tr = document.createElement("tr");
		for(var j = 0; j < this.colAmount; j++){
			 td = document.createElement("td");
			 tr.appendChild(td);
		}
		this.dom.appendChild(tr);
	}
	document.getElementById("app").appendChild(this.dom);
}

Game.prototype.start = function(){
	var self = this;
	this.f = 0;
	this.timer = setInterval(function(){
		self.f++;
		self.clear();
		var during = self.snake.body.length < 30 ? 30 - self.snake.body.length : 1 ;
		( self.f % during == 0) && self.snake.update();
		self.snake.render();
		self.food.render();
	},20);
}


Game.prototype.setColor = function(row, col, color){
	this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background = color;
}

Game.prototype.bindEvent = function(){
	var self = this;
	document.onkeydown = function(event){
		var event = event || window.event;
		if(event.keyCode == 37){
			if(self.snake.direction == "R") return;
			self.snake.changeDirection("L");
		}else if(event.keyCode == 38){
			if(self.snake.direction == "D")  return;
			self.snake.changeDirection("U");
		}else if(event.keyCode == 39){
			if(self.snake.direction == "L") return;
			self.snake.changeDirection("R");
		}else if(event.keyCode == 40){
			if(self.snake.direction == "U") return;
			self.snake.changeDirection("D");
		}
	}
}

Game.prototype.setTxt = function(row, col, str){
	this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].innerHTML = str;
}
Game.prototype.clear = function(){
	for(var i = 0; i <this.rowAmount; i++){
		for(var j = 0; j < this.colAmount; j++){
			this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = "";
			this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].style.background = "white";
			
		}
		
}
}

