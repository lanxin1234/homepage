function Food(mediator){
	var self = this;
	do{
		this.row = parseInt(Math.random() * mediator.rowAmount);
		this.col = parseInt(Math.random() * mediator.colAmount);
	}while((function(){
		for(var i = 0; i <mediator.snake.body.length; i++){
			if(mediator.snake.body[i].row == self.row && mediator.snake.body[i].col == self.col){
				return true;
			}
		}
		return false;
	})());
	
}

Food.prototype.render = function(row,col,str){
	game.setTxt(this.row, this.col,"☺");
}