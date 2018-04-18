var array=["img/apple.png","img/banana.png","img/bow.png","img/cabbage.png",
"img/carrot.png","img/cherry.png","img/cucumbers.png","img/grapes.png",
"img/lemon.png","img/pears.png","img/pineapple.png","img/raspberry.png",
"img/strawberry.png","img/tomato.png","img/watermelon.png","img/pumpkin.png","img/kiwi.png","img/peach.png"];
var choose1=["img/apple.png","img/pineapple.png","img/strawberry.png","img/carrot.png","img/pumpkin.png"];
var choose2=["img/cucumbers.png","img/watermelon.png","img/cherry.png","img/grapes.png","img/bow.png"];
var choose3=["img/banana.png","img/tomato.png","img/peach.png","img/cherry.png","img/apple.png"];
var choose4=["img/raspberry.png","img/cabbage.png","img/lemon.png","img/watermelon.png","img/cucumbers.png"];
var choose5=["img/bow.png","img/grapes.png","img/pears.png","img/kiwi.png","img/strawberry.png"];
var chooseArr=new Array();
chooseArr.push(choose1);
chooseArr.push(choose2);
chooseArr.push(choose3);
chooseArr.push(choose4);
chooseArr.push(choose5);

var gameArea=document.getElementById("game_area");
var searchArea=document.getElementById("search_area");

for(var i=0; i<array.length; i++){
	var img=document.createElement("img");
	img.setAttribute("class", "image");
	img.setAttribute("src", array[i]);
	gameArea.appendChild(img);
}

var arr=chooseArr[Math.round(Math.random()*(chooseArr.length-1))];
console.log(arr);
for(var j=0; j<arr.length; j++){
	var img=document.createElement("img");
	img.setAttribute("src", arr[j]);
	img.setAttribute("class", "search_image");
	searchArea.appendChild(img);
}

var w=document.getElementById("wrap");
var wh=document.getElementById("white");
var play=document.getElementById("play");
var replayN=document.getElementById("replayNegative");
var replayP=document.getElementById("replayPositive");
var gameOver=document.getElementById("gameover");
var gameWin=document.getElementById("gamewin");

play.addEventListener("click", function(e){
	w.setAttribute("class","close");
});
wh.addEventListener("click", function(e){
	e.stopPropagation();
});
replayN.addEventListener("click", function(e){
	location.reload();
});
replayP.addEventListener("click", function(e){
	location.reload();
});
var searchArray=document.getElementsByClassName("search_image");
var smail=document.getElementsByClassName("smail");
var live=3;
var win=0;
var flag=false;
console.log(smail);
gameArea.addEventListener("click",function(e){
	if(e.target.getAttribute("class")=="image"){
		for(var j=0; j<searchArray.length; j++){
			if(e.target.getAttribute("src")==searchArray[j].getAttribute("src")){
				e.target.classList.add("delete");
				searchArray[j].classList.add("delete");
				flag=true;
				win++;
			}
		}
		console.log(flag);
		if(!flag){
			live--;
			smail[live].classList.add("delete");
		}
		flag=false;
	}		
	if(live==0){
		gameOver.setAttribute("class","open");
	}
	if(win==searchArray.length){
		gameWin.setAttribute("class","open");
	}
})


