var App = {
	variables: {
		canvas : document.getElementById("canvas"),
		ctx: canvas.getContext("2d"),
		button : document.getElementById("button"),
		x1 : 0, 
		y1 : 0, 
		x2 : 0, 
		y2 : 0,
		coordinates : [],
		bool : false
	},

	start: function() {
		App.variables.canvas.classList.add("no-active");
		App.variables.ctx.fillStyle = "#000000";
		App.variables.canvas.addEventListener('mousemove', function(e) {
			if(App.variables.canvas.getAttribute("class") != "no-active") {
				App.variables.bool = true;
				App.draw(e);
			}
		});
		App.variables.canvas.addEventListener('mousedown', function(e) {
			App.variables.x1 = e.offsetX;
			App.variables.y1 = e.offsetY;
			App.variables.canvas.classList.remove("no-active");
		});
		App.variables.canvas.addEventListener('mouseup', function(){
			App.variables.canvas.classList.add("no-active");
			App.variables.bool = false;
			App.saveImage();
		});
		App.variables.button.addEventListener('click', function() {
			App.variables.ctx.clearRect(0,0,850,500);
			localStorage.clear();
		});
		window.addEventListener("load",function() {
			var cache = localStorage.getItem('coordinates');
			if(cache){
				var arr = cache.split(", ");
				var d = App.variables.ctx.getImageData(0, 0, 850, 500);
				var dLen = d.data.length;
				for(var i = 0; i < dLen; i++){
					d.data[i] = arr[i];
				}
				App.variables.ctx.putImageData(d, 0, 0);
			}
		});
	},

	draw: function(e) {
		App.variables.x2 = e.offsetX;
		App.variables.y2 = e.offsetY;
		App.variables.ctx.beginPath();
		App.variables.ctx.moveTo(App.variables.x1, App.variables.y1);
		App.variables.ctx.lineTo(App.variables.x2, App.variables.y2);
		App.variables.ctx.stroke();
		App.variables.x1 = App.variables.x2;
		App.variables.y1 = App.variables.y2;
	},

	saveImage: function() {
		var data = App.variables.ctx.getImageData(0, 0, 850, 500);
		var len = data.data.length;
		for(var i = 0; i < len; i++){
			App.variables.coordinates[i] = data.data[i] + "";
		}
		var str = App.variables.coordinates.join(", ");
		localStorage.setItem('coordinates', str);
	}
}

App.start();

