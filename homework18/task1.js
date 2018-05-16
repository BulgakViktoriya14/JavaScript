var canvas = document.getElementById("canvas");
canvas.classList.add("no-active");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#000000";
var button = document.getElementById("button");
var arrCoord = [];
var x1 = 0, y1 = 0, x2 = 0, y2 = 0;
var bool = false;

canvas.addEventListener('mousedown', function(e){
	x1 = e.offsetX;
	y1 = e.offsetY;
	canvas.classList.remove("no-active");
})

canvas.addEventListener('mousemove', function(e) {
	if(canvas.getAttribute("class") != "no-active") {
		x2 = e.offsetX;
		y2 = e.offsetY;
		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();
		x1 = x2;
		y1 = y2;
	}
})

canvas.addEventListener('mouseup', function(){
	canvas.classList.add("no-active");
})

button.addEventListener("click",function(){
	ctx.clearRect(0,0,1000,500)
})