var span = document.getElementsByTagName("span")[0];
var count=0;
function Increase(){
	count++
	span.innerText = count;
	span.style.color = "green";
}
function Decrease(){
	count--
	span.innerText = count;
	span.style.color = "red";
}
function reset1(){
	count=0;
	span.innerText=0
	span.style.color="black";
}