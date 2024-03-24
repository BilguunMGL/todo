// function -> dahin ashiglah bolomjtoi kodnii tsugluulga
// define/vvsgeh -> function functionName (){}
// argument/parametr -> func-iin avah utga
function hello(name,age){
	console.log("Hello "+name);
	console.log("How are you?");
	console.log(age);
	
}
// 2. call/duudaj ajiluulna
hello("bat",25);
hello("Suvd",30);
function nelber(too1,too2){
	console.log(too1 + too2);
}
nelber(20,10);
function kb(num1){
	console.log(num1 * num1);
}
kb(10);
kb(100);
function age(nas){
	if(nas>17){
		console.log("nasand hursen bna");
	}else if(nas<18){
		console.log("nasand hureegui bna");
	}else{
		
	}
}
age(12);
function num(too){
	if(too>0){
		console.log(too*1);
	}else if(too<0){
		console.log(too* -1);
	}
}
num(-100);
// DOM - document : html deer bga bvh code
console.log(document);
var h1 = document.getElementsByTagName('h1')[1];
var h2 = document.getElementsByTagName('h2')[0];
console.log(h1);
// variableName.style.styleName="utga";
h1.style.color="purple";
h2.style.color="green";
var h3= document.getElementsByTagName("h3")[0];
// 1. function
function changeColor(){
	h3.style.color="red";
	// variableName.innerText="solih vgee bichne"
	h3.innerText="Nice";
}
function changeColor(){
	h1.style.color="gray";
	h2.style.color="yellow";
	h1.innerText="good";
	h2.innerText="good";
}
var input = document.getElementsByTagName("input")[0];
var p = document.getElementsByTagName("p")[0];
function FindAge(){
	var inputAge = input.value;
	if(inputAge>17 && inputAge<=129){
		p.innerText="Nasand hursen bna";
		p.style.color="green";
	}else if(inputAge<17 && inputAge>=1){
		p.innerText="Nasand hureegui bna";
		p.style.color="blue";
	}else if(inputAge>130){
		p.innerText="iin hun baih bolojgui bn";
		p.style.color="red";
	}else if(inputAge<0){
		p.innerText="ta toroogui bn";
		p.style.color="yellow";
	}else if(inputAge){
		alert("hooson baij bolohgui");
	}
}
// var count = 0;
count++;
count--;