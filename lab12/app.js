const canvas = document.querySelector('.canvas');

const ctx = canvas.getContext("2d");
const gridSize = 20;
const snakeColor = "green";
const foodColor = "red";
let snake = [{x:10,y:10}];
let food = {x:2,y:1};
let dx=1, dy=0;
function drawFood(){
	ctx.fillStyle=foodColor;
	ctx.fillRect(food.x*gridSize,food.y*gridSize, gridSize,gridSize);
}

function drawSnake(snakeEl, color){
	snakeEl.forEach(segment =>{
		ctx.fillStyle=color;
		ctx.fillRect(segment.x*gridSize, segment.y*gridSize,gridSize, gridSize);
	})
}
function update(){
	let head = {x:snake[0].x+dx, y:snake[0].y+dy}
	snake.unshift(head);
	if(head.x==food.x && head.y==food.y){
		r1 = Math.floor(Math.random()*20);
		r2 = Math.floor(Math.random()*20)
		food = {x:r1,y:r2};
	}else{
	snake.pop();
	}
	if(head.x<0 || head.y<0 || head.x>=20 || head.y>=20){
		alert("you lost");
		snake = [{x:10,y:10}];
	}
		
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawFood();
	drawSnake(snake,snakeColor);
}
setInterval(update,200);

document.addEventListener("keydown",(event)=>{
	console.log(event);
	switch(event.key){
		case "w":
			if(dy!==1){
				dx=0;
				dy=-1;
			}
			break;
		case "s":
			if(dy!==-1){
				dx=0;
				dy=1;
			}
			break;
		case "a":
			if(dx!==-1){
				dx=-1;
				dy=0
			}
			break;
		case "d":
			if(dx!==1){
				dx=1;
				dy=0
			}
			break;
	}
	
});