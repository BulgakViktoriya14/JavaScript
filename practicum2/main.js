var contener = document.getElementById( "contener" );
var cart=document.getElementById("cart");
var buyThing = document.getElementById("buyThing");
var options={
	"#shirts":{
		option:"json/shirts.json"
	},
	"#dresses":{
		option:"json/dresses.json"
	},
	"#trousers":{
		option:"json/trousers.json"
	}
}

function ajaxLoad(path, callback) { 
	var xhr = new XMLHttpRequest;
	xhr.open("GET", path, true);
	xhr.onload=function() {
		callback(xhr.responseText);
	}
	xhr.send( null );
} 


var viewBasket = function(){
	cart.classList.remove("noActive");
	contener.innerHTML = "";
	contener.appendChild(cart);
}

var doOption=function() {
 	var hash=location.hash;
 	if(typeof(options[hash]) == "object") {
 		var option = options[hash].option;
 		ajaxLoad(option, function(text){ 
 			var item=JSON.parse(text);
 			viewGoods(item);
 		})
 	}
 		var links = document.querySelectorAll("a");
 		var len = links.length;
 		for(var i = 0; i < len; i++){
 			if(hash == links[i].getAttribute("href")) {
 				links[i].classList.add("active");
 			} else {
 				links[i].classList.remove("active");
 			}
 		}
 		if(hash == "#basket") {
 			viewBasket();	
 		}
 }

var viewGoods=function(obj){
	contener.innerHTML="";
	for(o of obj){
		var divThing=document.createElement("div");	
		divThing.setAttribute("class","divThing");
		divThing.innerHTML=`<img src="${o.picture}" class="imgThings"><h3>${o.title}</h3>
		<h4>Цена: </h4><h4>${o.price}</h4><h4>p</h4>
		<h5>${o.discription}</h5>
		<button class="butAdd">+</button><input type="text" value="1"><button class="butBooking">Добавить в корзину</button>`;
		var colors=document.createElement("div");	
		colors.setAttribute("class","chooseColor");
		var sub = o.subcat;
		for(f of sub) {
			var[name,image] = [document.createElement("p"),document.createElement("img")];
			name.innerText = f.colorName;
			colors.appendChild(name);
			image.setAttribute("class","colors")
			image.setAttribute("src",f.picture);
			colors.appendChild(image);
		}
		divThing.appendChild(colors);
		contener.appendChild(divThing);
	}
}

var i = 0;
contener.addEventListener("click",function(e) {
	if(e.target.getAttribute("class") == "butAdd") {
		e.target.nextElementSibling.value = Number(e.target.nextElementSibling.value)+1;
	}
	if(e.target.getAttribute("class")=="butBooking") {
		let cost = Number(e.target.parentNode.children[3].outerText) * Number(e.target.parentNode.children[7].value);
		let buff = document.createElement("p");
		++i;
		buff.innerText = `${i}) ${e.target.parentNode.children[1].outerText}
		Цена: ${cost} р
		Количество: ${e.target.parentNode.children[7].value}`;
		let src = e.target.parentNode.children[0].getAttribute("src");
		let cartImg = document.createElement("img");
		cartImg.setAttribute("src",src);
		buff.appendChild(cartImg);
		buyThing.appendChild(buff);
		cart.children[1].innerText = Number(cart.children[1].outerText) + cost;
	}
	if(e.target.getAttribute("class") == "colors"){
		e.target.parentNode.parentNode.children[0].setAttribute("src", e.target.getAttribute("src"));
	}
})

window.addEventListener("hashchange",doOption);
doOption()