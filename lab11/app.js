// ES5 var, function-> ES6 let, const,
let input = document.getElementsByTagName('input')[0];
let addBtn= document.querySelector(".add");
let olEl = document.getElementsByTagName('ol')[0];
// ES5 function => E
addBtn.addEventListener("click",()=>{
	if(input.value==""){
		alert("canot be empty");
	}else{
		let liEl = document.createElement("li");
		liEl.innerText = input.value;
		olEl.append(liEl);
		input.value="";
		let delBtn = document.createElement("button");
		delBtn.innerHTML = "<i class='bi bi-trash'></i>";
		liEl.append(delBtn);
		let checkBtn = document.createElement("button");
		checkBtn.innerHTML ="<i class='bi bi-check'></i>";
		liEl.append(checkBtn);
		// tag-d class nemdeg -> classNamedelBtn.className = "del"
		delBtn.className = "del" ;
		
		saveData();
	}
});
olEl.addEventListener("click",(e)=>{
	let targetEl = e.target;
	let parentEl = (targetEl.parentElement).parentElement;
	if(targetEl.className=="bi bi-trash"){
		parentEl.remove();	
	}else if(targetEl.className=="bi bi-check"){
		// classList -> tag deer class nemne -> toggle
		parentEl.classList.toggle("checked");
		parentEl.style.color="green";
	}
	saveData();
});
function saveData(){
	localStorage.setItem("todo", olEl.innerHTML);
}
function getData(){
	olEl.innerHTML = localStorage.getItem('todo');
}
getData();
