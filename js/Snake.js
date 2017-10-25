function Snake(mediator){
	this.mediator = mediator;
	this.body = [
			{"row" : 3 , "col" : 8},
			{"row" : 3 , "col" : 7},
			{"row" : 3 , "col" : 6},
			{"row" : 3 , "col" : 5},
			{"row" : 3 , "col" : 4}
	];
	this.direction = "R" ;
	this.willDirection = "R";
}

Snake.prototype.render = function(){
		for(var i = 0; i < this.body.length; i++){
			this.mediator.setColor(this.body[i].row, this.body[i].col, "red");
		}
		
}
Snake.prototype.update = function(){
	this.direction = this.willDirection; ;
	switch(this.direction){
			case "R" :
				this.toucha = {"row" : this.body[0].row, "col" : this.body[0].col + 1};
				this.body.unshift(this.toucha);
				break;
			case "U" :
				this.toucha = {"row" : this.body[0].row -1, "col" : this.body[0].col};
				this.body.unshift(this.toucha);
				break;
			case "L" :
				this.toucha = {"row" : this.body[0].row, "col" : this.body[0].col - 1};
				this.body.unshift(this.toucha);
				break;
			case "D" :
				this.toucha = {"row" : this.body[0].row + 1, "col" : this.body[0].col};
				this.body.unshift(this.toucha);
				break;

	}

	//吃到食物的判定
	if(this.toucha.row == game.food.row &&  this.toucha.col == game.food.col){
		//如果吃到食物就不要删除尾部一项
		//在new 出一个新的食物
		game.food = new Food(game);

	}else{
		this.body.pop();
	}

	//撞墙判定
	if(this.toucha.row < 0 || this.toucha.col < 0 || this.toucha.row >= game.rowAmount || this.toucha.col >= game.colAmount ){
		// alert("哎呦，撞墙了，再来一次！");
		alert("你的当前的得分是：" + this.body.length);
		clearInterval(game.timer);
	}

	//撞自己的判定,咋不相信自己不敢写了呢，思路对着呢
	for(var i = 1; i < this.body.length; i++){
		if(this.toucha.row == this.body[i].row && this.toucha.col == this.body[i].col){
			alert("可厉害死了，你把自己撞死了！");
			alert("你的当前的长度是：" + this.body.length);
			clearInterval(game.timer);
		}
	}

}

		




Snake.prototype.changeDirection = function(str){
		this.willDirection = str;
}

// //食物判定
// if(toucha.row == game.food.row && toucha.col == game.food.col){
// 	//不删尾部,食物要重新new 一个
// 	game.food = new Food(game);
// 	// game.f = 0;
	
// }else{
// 	this.body.pop();
// }





