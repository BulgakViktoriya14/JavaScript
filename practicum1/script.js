var array=["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg"];
var count = 0;
var div=document.createElement("div");
div.setAttribute("class","gallery");
document.body.appendChild(div);

var arrows=document.createElement("div");
arrows.setAttribute("class","arrows");
document.body.appendChild(arrows);

var arrowR=document.createElement("img");
arrowR.setAttribute("src","img/right.png");
arrows.appendChild(arrowR);

var arrowL=document.createElement("img");
arrowL.setAttribute("src","img/left.png");
arrows.appendChild(arrowL);

var points=document.createElement("div");
points.setAttribute("class","points");
document.body.appendChild(points);

for(var i=0; i<array.length; i++){
	var point=document.createElement("div");
	point.setAttribute("class","point");
	points.appendChild(point);
	if(i==0){
		point.classList.toggle("point_active");
	}
}

for(var i=0; i<=array.length; i++){
	var img=document.createElement("img");
	div.appendChild(img);
	img.setAttribute("src", array[i]);
	img.setAttribute("class", "image");	
	arrowL.classList.toggle("left");
	arrowR.classList.toggle("right");
	if(i==0){
		img.classList.toggle("active");
	}
}

var images=document.getElementsByClassName("image");
var dots=document.getElementsByClassName("point");

arrowR.addEventListener("click",function(){
	if(count<(array.length-1)){
		images[0].setAttribute("src",array[++count]);
		dots[count].classList.add("point_active");
		dots[count-1].classList.remove("point_active");
	}

})

arrowL.addEventListener("click",function(){
	if(count>0){
		images[0].setAttribute("src",array[--count]);
		dots[count].classList.add("point_active");
		dots[count+1].classList.remove("point_active");
		
	}
})

points.addEventListener("click",function(e){
	if(e.target.getAttribute("class")=="point"){
		for(var i=0; i<dots.length; i++){
			if(dots[i]==e.target){
				e.target.classList.add("point_active");
				images[0].setAttribute("src",array[i]);
				count=i;
			}
			if(dots[i]!=e.target){
				dots[i].classList.remove("point_active");
			}
		}
	}
})
arrowR.addEventListener("mouseover",function(e){
	e.target.classList.toggle("change_arrows");
})
arrowR.addEventListener("mouseout",function(e){
	e.target.classList.toggle("change_arrows");
})
arrowL.addEventListener("mouseover",function(e){
	e.target.classList.toggle("change_arrows");
})
arrowL.addEventListener("mouseout",function(e){
	e.target.classList.toggle("change_arrows");
})
