var contener=document.getElementById("contener");
var i=1;
var path= "goods1.json";
var addGoods=function(p){
	var xhr= new XMLHttpRequest;
	xhr.open("GET", p, true);
	xhr.addEventListener("load", function(){
		var good= JSON.parse(xhr.responseText);
		descriptionGood(good);
	});
	xhr.send(null);
};
var descriptionGood=function(g){
	for(var i=0; i<g.length; i++ ){
		var contenerGood= document.createElement("div");
		contenerGood.classList.add("item");
		var name= document.createElement("h2");
		var price= document.createElement("h4");
		var country= document.createElement("p");
		var image= document.createElement("img");
		name.innerText= g[i].name;
		price.innerText= g[i].price+" р";
		country.innerText= "Производитель: "+g[i].country;
		image.setAttribute("src",g[i].image);
		contenerGood.appendChild(name);
		contenerGood.appendChild(price);
		contenerGood.appendChild(country);
		contenerGood.appendChild(image);
		contener.appendChild(contenerGood);
	}
};
window.addEventListener("scroll",function(){
	if(contener.getBoundingClientRect().bottom < innerHeight){
		++i;
		path="goods"+i+".json";
		addGoods(path);
	}
});
addGoods(path);
