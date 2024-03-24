// fof loop -> davtalt
console.log("Hello");
// for (var= i=ehleh_too; i++/i--){
//}
for(var i=1;i<=10;i++){
	console.log(i+".hello");
}
// i=1 --> 1<=10 -> true -> 1.hello ->2
// i=2 --> 2<=10 -> true -> 2.hello ->3
for(var i=10;i>=1;i--){
	console.log(i);
}
for(var i=1;i<=20;i++){
if(i%2==0){
	console.log("tegsh:"+i);
}else{
	console.log("sondgoi:"+i);
}
}
for(var i=1;i<=100;i++){
if(i%3==0 && i%5==0){
	console.log("3 bolon 5d huvaagdadg too:"+i);
}else{
	
}
}
var sum=0;
var vrjver=1;
for(var i=1;i<=10;i++){
	sum=sum+i;
	vrjver=vrjver*i
}
console.log("1-10 niilber:"+sum);
console.log("1-10 vrjvertoo2=3:"+vrjver);
var hvrd=2

for(var i=1;i<=10;i++){
	console.log(hvrd + "x" + i + "=" + hvrd*i);
}
var randomNumber = Math.floor(Math.random()*10)+1;
console.log(randomNumber);
var chance=3;
for(var i=1; i<=chance;i++){
	var myNumber = +prompt("guess 1-10 random number");
	if(myNumber==randomNumber){
		alert("you won");
		break;
	}else if(myNumber<1){
		alert("1 gees baiga too oruulj bolohgui");
	}else if(myNumber>=10){
		alert("10aas ih too oruulah bolomjgui bn");
	}else if(myNumber>randomNumber){
		alert("tanii oruulsan too ih bn -1");
		alert(chance-i);
	}else if(myNumber<randomNumber){
		alert("tanii oruulsan too baga bn -1");
		alert(chance-i);
	}else{
		
	}
}
	if(i==chance){
	alert("Ta hojigdloo");
	}else{
		
	}
for(var i=*;)