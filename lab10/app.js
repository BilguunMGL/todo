// API -> tusgailan hadgalsan medeelleiig holbogch.
// fetch() -> api ruu huselt ywuulna
// Promise -> nadad hariu irne gesen amlalt
// .then() -> Promise
// response -> 200 : approved, 404,300,500 : error
// json -> zambaraagui medeeleliig tsegtstei gargaj irne
//fetch('https://fakestoreapi.com/products').then(
//	response => response.json()
//).then(
//	product =>{
//		console.log(product[0].title)
//		console.log(product[product.length-1].rating.rate)
//	}
//)
var input = document.getElementsByTagName('input')[0];
var country = document.querySelector('.name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var wind = document.querySelector('.wind');
function srch(){
	var city = input.value;
	fetch(
	`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
	response => response.json()
).then(
	data =>{
		console.log(data);
		country.innerText= data.name;
		temp.innerText= data.main.temp;
		desc.innerText= data.weather[0].description;
		wind.innerText= data.wind.speed;
		switch(data.weather[0].main){
			case"Clouds":
				document.getElementsByTagName('img')[0].src="cloud.png";
				break;
			case"Clear":
				document.getElementsByTagName('img')[0].src="clear.png";
				break;
			case"Rain":
				document.getElementsByTagName('img')[0].src="rain.png";
				break;
			case"Mist":
				document.getElementsByTagName('img')[0].src=".png";
				break;
		}
	}
	)
}
