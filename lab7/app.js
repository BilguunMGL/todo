// massive/array
var too = 5;
//[] -> massive/array
var toonuud = [5,6,3,100];
console.log(toonuud);
// index -> elementiin bairshil. 0-ees ehelne
console.log(toonuud[0]);
console.log(toonuud[1]);
console.log(toonuud[2]);
var test = ["text",20,true,null];
console.log(test);
console.log(test[0]); //humgin ehniih
console.log(test[3]);
console.log(test[test.length-1]); //hamgiin svvliin
var fruit = ["apple","orange","dragon","banana"];
console.log(fruit[0]);
console.log(fruit[fruit.length-1])

var numbers = [2,4,7,1,9];
console.log(numbers);
for(var i=0;i<=numbers.length-1;i++){
	console.log(numbers[i]);
}
// i=0 0<=4 -> true -> 5 -> i++
// i=1 -> 1<=4 -> true -> 3 -> i++
// i=2
// i=5 -> 5<=4 -> false stopvar

var number = [1,2,3,4,5];
console.log(number[0] * number[number.length-1]);

var num = [2,3,5,6,1,7,4,9,8,10];
console.log(num[0]+num[1]+num[2]+num[3]+num[4]+num[5]+num[6]+num[7]+num[8]+num[num.length-1]);
console.log(num[0]*num[1]*num[2]*num[3]*num[4]*num[5]*num[6]*num[7]*num[8]*num[num.length-1]);
var too1 = [2,5,7,4,6];
for(var i=0;i<=too1.length-1;i++){
	if(num[i]%2==0){
		console.log("tegsh:"+num[i]);
	}else{
		console.log("sondgoi:"+num[i]);
	}
}
var colors = ["red","blue","green","gray","brown"];
var btn = document.getElementsByTagName('button')[0];
var body = document.getElementsByTagName('body')[0];
var btn = document.getElementsByTagName('button')[1];
var btn = document.getElementsByTagName('button')[2];
var i=-1;
function changeColor(){
	i++;
	if(i>colors.length-1){
		i=0;
	}
	body.style.backgroundColor = colors[i];
	btn.innerText = colors[i];
}
function backColor(){
	i--;
	if(i<0){
		i=colors.length-1;
	}
	body.style.backgroundColor = colors[i];
}
// setTimeout -> func heden millisecond daraa ajilhiig tohurrulna a000ms=1s
var up;
function auto(){
i++;
	if(i>colors.length-1){
		i=0;
	}
	body.style.backgroundColor = colors[i];
	up = setTimeout(auto,1000);
}
// clearTimeout - zogloono
function stop(){
	clearTimeout(up);
}
// gert-