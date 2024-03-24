// object -> OOP
// key : value {}
/*var phone = {
	name : "ipl5",
	color : "black",
	year : 2023,
	isBroken : false,
	call : function(){
		console.log("calling..");
	}
}
console.log(phone);
console.log(phone.name);
console.log(phone.year);
console.log(phone["color"]);
phone.call();
var car = {
	name : "lamborghini",
	color : "red",
	year : 2002,
	isFast : true
}
console.log(car);

var person = {
	name : "jimmy",
	age : 23,
	address : {
		country : "mongolia",
		city : "ulaanbaater",
		district:"BGD",
		appartment : {
			name : "viva",
			building : 12,
			toot : 50
		}
	},
	hello : function(){
		console.log("Hello,my name is" + this.name);
		console.log("i am " +this.age+" nastai");
		console.log("I live in "+ this.address.city);
	}
}
console.log(person	.address.appartment.toot);
console.log(person.address.appartment.name);
person.hello();
//udamshuulah -> damjuulah
var kid = {
	name : "bold",
	ovog : person.name,
	address : person.address
}
console.log(kid.address.appartment.building);

var animeSite = {
	anime1: {
		name : "jjk",
		angi : 200,
		uzsen : true
	},
	anime2: {
		name : "DragonBall",
		angi : 1000,
		uzsen : false
	},
	anime3: {
		name : "onepice",
		angi : 1024,
		uzsen : true
	},
	anime4: {
		name : "hxh",
		angi : 40,
		uzsen : true
	},
	anime5: {
		name : "DemonSlayer",
		angi : 54,
		uzsen : false
	}
}
// es5for -> es6 for in ,for off
for(key in animeSite){
	//console.log(animeSite[key].name);
	//console.log(animeSite[key].angi);
	if(animeSite[key].uzsen == false && animeSite[key].angi<100){
		console.log(animeSite[key].name);
}
}
*/
var company = {
	worker1 : {
		name : "joy",
		age : 24,
		gender : "male",
		email : "worker1gmail.com",
		number : 97112911
	},
	worker2 : {
		name : "mark",
		age : 33,
		gender : "male",
		email : "worker2gmail.com",
		number : 99251128
	},
	worker3 : {
		name : "angel",
		age : 21,
		gender : "female",
		email : "worker3gmail.com",
		number : 88119212
	},
	worker4 : {
		name : "matt" ,
		age : 26,
		gender : "male",
		email : "worker4gmail.com",
		number : 55212345
	},
	worker5 : {
		name : "jimmy",
		age : 24,
		gender : "male",
		email : "worker5gmail.com",
		number : 99141201
	},
	worker6 : {
		name : "ema",
		age : 27,
		gender : "female",
		email : "worker6gmail.com",
		number : 22146612
	},
	worker7 : {
		name : "juddy",
		age : 22,
		gender : "male",
		email : "worker7gmail.com",
		number : 44118890
	},
	worker8 : {
		name : "gold",
		age : 36,
		gender : "male",
		email : "worker8gmail.com",
		number : 14961356
	},
	worker9 : {
		name : "sal",
		age : 45,
		gender : "male",
		email : "worker9gmail.com",
		number : 88112346
	},
	worker10 : {
		name : "bon",
		age : 20,
		gender : "male",
		email : "worker10gmail.com",
		number : 12465777
	}
}
for(key in company){
console.log(company[key].name);

}
for(key in company){
if(company[key].gender == "female" && company[key].age>25){ 
	console.log(company[key].name);
}
}