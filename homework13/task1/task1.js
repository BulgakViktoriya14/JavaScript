var contener=document.getElementById("contener");
var cart=document.getElementById("cart");
var buyFood=document.getElementById("buyFood");
var divFood, divInfo, divPrice;
var i=0;
var options={
	"#pizza":{
		option:"jsonForTask1/pizza.json"
	},
	"#shaurma":{
		option:"jsonForTask1/shaurma.json"
	},
	"#burgers":{
		option:"jsonForTask1/burgers.json"
	}
}

var doOption=function(){
 	var hash=location.hash;
 	if(typeof(options[hash])=="object"){
 		var option=options[hash].option;
 		var xhr=new XMLHttpRequest;
		xhr.open("GET",option,true);
		xhr.onload=function(){
			var food= JSON.parse(xhr.responseText);
			optionsFood(food);
			}
		xhr.send(null);
 		}
 		var links=document.querySelectorAll("a");
 		for(var i=0;i<links.length; i++){
 			if(hash==links[i].getAttribute("href")){
 				links[i].classList.add("active");
 			}
 			else{
 				links[i].classList.remove("active");
 			}
 		}
 }
 window.addEventListener("hashchange",doOption);

var learnMore=function(obj,content){
	for(var i=0; i<obj.length; i++){
		divInfo=document.createElement("div");
		divInfo.setAttribute("class","divInfo");
		divInfo.innerHTML="<p>Состав: "+obj[i].composition+"</p><button class='butPrice' src='"+obj[i].sizes+"'>Заказать</button>";			
		content.appendChild(divInfo);
		divInfo.parentNode.children[2].classList.add("activeClose");
	}
}

var learnPrice=function(obj,content){
	for(var i=0; i<obj.length; i++){
		var newSub=obj[i].subcat;
		for(var j=0; j<newSub.length; j++){
			divPrice=document.createElement("div");
			divPrice.setAttribute("class","divPrice");
			divPrice.innerHTML="<h4>Цена: </4><h4>"+newSub[j].price+"</h4><h4> p</h4><h5>Вес: "+newSub[j].weight+"</h5><button class='butBooking'>Добавить в корзину</button>";			
			content.appendChild(divPrice);
		}
	}
	
}

var optionsFood=function(obj){
	contener.innerHTML="";
	for(var i=0; i<obj.length; i++){
		var sub=obj[i].subcat;
		for(var j=0; j<sub.length; j++){
			divFood=document.createElement("div");
			divFood.setAttribute("class","divFood");
			divFood.innerHTML="<h2>"+sub[j].name+"</h2><button class='butInfo'src='"+sub[j].file+"'>Подробнее</button>";	
			butClose=document.createElement("button");
			butClose.setAttribute("class","close");
			butClose.innerText="X";
			divFood.appendChild(butClose);
			contener.appendChild(divFood);
		}
	}
}

contener.addEventListener("click",function(e){
	if(e.target.getAttribute("class")=="butInfo"){
		var path=e.target.getAttribute("src");
		var xhr1=new XMLHttpRequest;
		xhr1.open("GET",path,true);
		xhr1.onload=function(){
			var moreInfo= JSON.parse(xhr1.responseText);
			learnMore(moreInfo, e.target.parentNode);
		}
		xhr1.send(null);
		
	}
	if(e.target.getAttribute("class")=="butPrice"){
		var path=e.target.getAttribute("src");
		var xhr1=new XMLHttpRequest;
		xhr1.open("GET",path,true);
		xhr1.onload=function(){
			var priceFood= JSON.parse(xhr1.responseText);
			learnPrice(priceFood,e.target.parentNode)
		}
		xhr1.send(null);
	}
	if(e.target.getAttribute("class")=="butBooking"){
		cart.children[1].innerText=Number(cart.children[1].outerText)+1;
		cart.children[2].innerText=Number(cart.children[2].outerText)+Number(e.target.parentNode.children[1].outerText);
		var buff=document.createElement("p");
		++i;
		buff.innerText=i+") "+e.target.parentNode.parentNode.parentNode.firstChild.outerText+"\n"+e.target.previousElementSibling.outerText;
		buyFood.appendChild(buff);
	}
	if(e.target.getAttribute("class")=="close activeClose"){
		e.target.classList.remove("activeClose");
		divInfo.classList.add("delete");
	}
})
