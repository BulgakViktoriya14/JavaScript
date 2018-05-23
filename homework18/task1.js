var App = {
	variables: {
		canvas: document.getElementById("canvas"),
		ctx: canvas.getContext("2d"),
		button: document.getElementById("button"),
		arrCoord: [],
		x1: 0, 
		y1: 0, 
		x2: 0, 
		y2: 0
	},

	start: function() {
		App.variables.canvas.classList.add("no-active");
		App.variables.ctx.fillStyle = "#000000";
		App.variables.canvas.addEventListener('mousedown', function(e){
			App.variables.x1 = e.offsetX;
			App.variables.y1 = e.offsetY;
			App.variables.canvas.classList.remove("no-active");
		});
		App.variables.canvas.addEventListener('mousemove', function(e) {
			if(App.variables.canvas.getAttribute("class") != "no-active") {
				App.draw(e.offsetX, e.offsetY);
			}
		});

		App.variables.canvas.addEventListener('mouseup', function(){
			App.variables.canvas.classList.add("no-active");
		});

		App.variables.button.addEventListener("click",function(){
			App.variables.ctx.clearRect(0,0,1000,500);
		});
	},

	draw: function(x,y) {
		App.variables.x2 = x;
		App.variables.y2 = y;
		App.variables.ctx.beginPath();
		App.variables.ctx.moveTo(App.variables.x1, App.variables.y1);
		App.variables.ctx.lineTo(App.variables.x2, App.variables.y2);
		App.variables.ctx.stroke();
		App.variables.x1 = App.variables.x2;
		App.variables.y1 = App.variables.y2;
	}
}

App.start();
