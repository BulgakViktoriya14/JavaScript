var App = {
    variables : {
        canvas : document.getElementById("canvas"),
        ctx : canvas.getContext('2d'),
        ctx : canvas.getContext('2d'),
        canvasW: canvas.width,  
        canvasH: canvas.height,
        divLoad : document.getElementsByClassName("loadFile"),
        divStickers : document.getElementsByClassName("stickers"),
        img : new Image(),
        input : document.getElementById("input"),
        butLoad : document.getElementById("load"),
        x1 : 0, y1 : 0, x2 : 0, y2 : 0, bool : false,
		divBrushes : document.getElementById("brushes"),
		colorBrush: document.getElementById("colorBrush"),
		numberBrush : document.getElementById("numberBrush"),
        divBorders : document.getElementById("borders"),
        divFilters : document.getElementById("filters"),
        colorFont : document.getElementById("colorFont"),
        numberFont : document.getElementById("numberFont"),
        butWrite : document.getElementById("writeText"),
        divText : document.getElementById("text"),
        select : document. getElementById("select")
    },

    start : function() {
    	App.variables.canvas.classList.add("no-active");
    	App.ajaxLoad("json.json", function(text) {
    		var json = JSON.parse(text);
    		App.createStickers(json);
    	})
    	App.variables.canvas.addEventListener("mouseover" , function(e) {
    		if(!App.checkCanvas()) {
    			App.variables.divLoad[0].classList.add("active");
    		}
    	})
    	App.variables.divLoad[0].addEventListener("mouseout" , function(e) {
    		e.target.classList.remove("active");
    	})

    	App.variables.butLoad.addEventListener("click", function(e) {
    		var parent = e.target.parentNode;
    		App.loadImage(parent);
    	})
    	
    	App.variables.divStickers[0].addEventListener("click", function(e) {
    		if(e.target.getAttribute("class") == "picture") {
    			let arr = e.target.parentNode.children;
    			e.target.setAttribute("id", "activeImg");
    			App.moveImg(e.target);
    		}
    	})	

    	App.variables.divBrushes.addEventListener("click", function(e) {
    		if(e.target.nodeName == "IMG") {
    			App.chooseBrush(e.target);
    		}
    	})

        App.variables.divBorders.addEventListener("click", function(e) {
            if(e.target.nodeName == "IMG") {
                App.setBorder(e.target);
            }
            if(e.target.getAttribute("id") == "deleteBorder") {
                App.variables.ctx.restore(); //не работает
            }
            if(e.target.getAttribute("id") == "clearCanvas") {
                App.clear();
            }
        })

        App.variables.divFilters.addEventListener("click", function(e) {
            if(e.target.nodeName == "BUTTON") {
                App.setFilters(e.target);
            }
        })

        App.variables.butWrite.addEventListener("click", function(e) {
            App.write();
        })
    },

    checkCanvas : function() {
    	let flag = false;
    	let data = App.variables.ctx.getImageData(0, 0, App.variables.canvasW, App.variables.canvasH);
    	let len = data.data.length;
    	for(var i = 0; i < len; i++) {
   			if(!data.data[i]) {
      			flag = false;
   			} else {
      			flag = true;
      			break;
    		}
  		}
 		return flag;
    },

    loadImage : function(parent) {
        var files = App.variables.input.files; 
        var file = files[0];
        var reader = new FileReader(); 
        reader.addEventListener("load", function(){
            App.variables.img.setAttribute("src", this.result); 
        }) 
        reader.readAsDataURL(file); 
        App.variables.img.onload = function() {
    		App.variables.ctx.drawImage(App.variables.img, 0, 0, App.variables.canvasW, App.variables.canvasH);
    		parent.classList.remove("active");
    	}
    },

    ajaxLoad : function(path, callback) {
		var xhr = new XMLHttpRequest;
		xhr.open("GET", path, true);
		xhr.onload = function() {
			callback(xhr.responseText);
		}
		xhr.send(null);
	},

	createStickers : function(arr) {
		arr.forEach(function(elem) {
			let imgSt = document.createElement("img");
			imgSt.setAttribute("src", elem.img);
			imgSt.setAttribute("class", "picture");
			App.variables.divStickers[0].appendChild(imgSt);
		})
	},

	moveImg : function(obj) {
		if(obj.getAttribute("id") == "activeImg") {
			App.variables.canvas.addEventListener("drop", function(e) {
                if(obj.getAttribute("id") == "activeImg") {
                    App.variables.ctx.drawImage(obj, e.offsetX, e.offsetY, obj.width, obj.height);
                }
				obj.removeAttribute("id");
                App.variables.ctx.save();
			})
			App.variables.canvas.addEventListener("dragover", function(e){
            	e.preventDefault();
        	})
		}
	},

	manageDrawing : function() {
		App.variables.canvas.addEventListener('mousedown', function(e) {
				App.variables.x1 = e.offsetX;
				App.variables.y1 = e.offsetY;
				App.variables.bool = true;
			})

		App.variables.canvas.addEventListener('mouseup', function(e) {
			App.variables.bool = false;
		})

		App.variables.canvas.addEventListener('mousemove', function(e) {
			if(App.variables.bool) {
				App.draw(e);
			}
		})
	},

    write : function() {
        App.variables.canvas.addEventListener("click", function(e) {
            let [fontFormat, fontType, fontColor] = [App.variables.numberFont.value, App.variables.select.value, App.variables.colorFont.value];
            let textarea = document.createElement("textarea");
            textarea.style.left = `${e.pageX}px`;
            textarea.style.top = `${e.pageY}px`;
            textarea.style.fontStyle =  fontType;
            textarea.style.color =  fontColor;
            textarea.style.fontSize =  `${fontFormat}px`;
            App.variables.divText.appendChild(textarea);
            App.variables.ctx.fillStyle = fontColor;
            App.variables.ctx.textBaseline = "center";
            App.variables.ctx.textAlign = "center";
            App.variables.ctx.font = `${fontType} ${fontFormat}px Arial`;
            textarea.addEventListener("mouseout", function(){
                App.variables.ctx.fillText(textarea.value, e.offsetX, e.offsetY);
                textarea.remove();
            })
            App.variables.ctx.save();
        })
    },
	

	draw : function(e) {
		let buffCtx = App.variables.ctx;
		buffCtx.strokeStyle = App.variables.colorBrush.value;
		buffCtx.lineWidth = App.variables.numberBrush.value;
		App.variables.x2 = e.offsetX;
		App.variables.y2 = e.offsetY;
		buffCtx.beginPath();
		buffCtx.moveTo(App.variables.x1, App.variables.y1);
		buffCtx.lineTo(App.variables.x2, App.variables.y2);
		buffCtx.stroke();
		App.variables.x1 = App.variables.x2;
		App.variables.y1 = App.variables.y2;
        App.variables.ctx.save();
	},

	chooseBrush : function(obj) {
		let buffCtx = App.variables.ctx;
    	if(obj.getAttribute("id") == "dottedLine") {
    		buffCtx.globalAlpha = 1;
    		buffCtx.setLineDash([5, 15]);
    		buffCtx.lineCap = "butt";
    		buffCtx.shadowColor="rgba(0, 0, 0, 0)";
    	} else if(obj.getAttribute("id") == "translucent") {
    		buffCtx.globalAlpha = 0.5;
    		buffCtx.setLineDash([]);
    		buffCtx.lineCap = "butt";
    		buffCtx.shadowColor="rgba(0, 0, 0, 0)";
    	} else if(obj.getAttribute("id") == "shadow") {
    		buffCtx.shadowOffsetX = 10;  
			buffCtx.shadowOffsetY = 10; 
    		buffCtx.shadowBlur=20;
    		buffCtx.shadowColor="rgba(0, 0, 0, 0.8)";
    		buffCtx.setLineDash([]);
    		buffCtx.lineCap = "butt";
    		buffCtx.globalAlpha = 1;
    	} else {
    		buffCtx.globalAlpha = 1;
			buffCtx.lineCap = obj.getAttribute("id");
			buffCtx.setLineDash([]);
			buffCtx.shadowColor="rgba(0, 0, 0, 0)";
    	}
    	App.manageDrawing();
    },

    doBlackWhite : function() {
        App.variables.ctx.drawImage(App.variables.img, 0, 0, App.variables.canvasW, App.variables.canvasH);
        let imgPixels = App.variables.ctx.getImageData(0, 0, App.variables.canvasW, App.variables.canvasH);
        let len =  imgPixels.width * imgPixels.height; 
        for(var i = 0; i < len; i++){   
            let temp = (imgPixels.data[4 * i] + imgPixels.data[4 * i + 1] + imgPixels.data[4 * i + 2]) / 3;  
            imgPixels.data[4 * i] = temp;   
            imgPixels.data[4 * i + 1] = temp;   
            imgPixels.data[4 * i + 2] = temp;  
        }    
        App.variables.ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    },

    doNegative : function() {
        App.variables.ctx.drawImage(App.variables.img, 0, 0, App.variables.canvasW, App.variables.canvasH);
        let imgPixels = App.variables.ctx.getImageData(0, 0, App.variables.canvasW, App.variables.canvasH);
        let len =  imgPixels.width * imgPixels.height;  
        for(var i = 0; i < len; i++) {    
            imgPixels.data[4 * i] = 255 - imgPixels.data[4 * i];   
            imgPixels.data[4 * i + 1] = 255 - imgPixels.data[4 * i + 1];   
            imgPixels.data[4 * i + 2] = 255 - imgPixels.data[4 * i + 2];  
        }  
        App.variables.ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    },

    doSepia : function() {
        App.variables.ctx.drawImage(App.variables.img, 0, 0, App.variables.canvasW, App.variables.canvasH);
        let imgPixels = App.variables.ctx.getImageData(0, 0, App.variables.canvasW, App.variables.canvasH);
        let len =  imgPixels.width * imgPixels.height; 
        for(var i = 0; i < len; i++) { 
            let red = imgPixels.data[4 * i]; 
            let green = imgPixels.data[4 * i + 1]; 
            let blue = imgPixels.data[4 * i + 2]; 
            imgPixels.data[4 * i] = (red * 0.393) + (green * 0.769) + (blue * 0.189); 
            imgPixels.data[4 * i + 1] = (red * 0.349) + (green * 0.686) + (blue * 0.168); 
            imgPixels.data[4 * i + 2] = (red * 0.272) + (green * 0.534) + (blue * 0.131);
        } 
        App.variables.ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    },

    addContrast : function() {
        App.variables.ctx.drawImage(App.variables.img, 0, 0, App.variables.canvasW, App.variables.canvasH);
        let imgPixels = App.variables.ctx.getImageData(0, 0, App.variables.canvasW, App.variables.canvasH);
        let len =  imgPixels.width * imgPixels.height;  
        let factor = 500 / 0.01; 
        for(var i = 0; i < len; i++) {
            imgPixels.data[4 * i] = factor * (imgPixels.data[4 * i] - 128) + 128;  
            imgPixels.data[4 * i + 1] = factor * (imgPixels.data[4 * i + 1] - 128) + 128; 
            imgPixels.data[4 * i + 2] = factor * (imgPixels.data[4 * i + 2] - 128) + 128; 
        }
        App.variables.ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    },

    reduceContrast : function() {
        App.variables.ctx.drawImage(App.variables.img, 0, 0, App.variables.canvasW, App.variables.canvasH);
        let imgPixels = App.variables.ctx.getImageData(0, 0, App.variables.canvasW, App.variables.canvasH);
        let len =  imgPixels.width * imgPixels.height; 
        let contrast = -0.3; 
        contrast *= 255;
        let factor = (contrast + 255) / (255.01 - contrast); 
        for(var i = 0; i < len; i++) {
            imgPixels.data[4 * i] = factor * (imgPixels.data[4 * i] - 128) + 128;  
            imgPixels.data[4 * i + 1] = factor * (imgPixels.data[4 * i + 1] - 128) + 128; 
            imgPixels.data[4 * i + 2] = factor * (imgPixels.data[4 * i + 2] - 128) + 128; 
        }
        App.variables.ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    },

    setFilters : function(elem) {
        if(elem.getAttribute("id") == "black_white") {
            App.doBlackWhite();    
        }
        if(elem.getAttribute("id") == "negative") {
            App.doNegative();
        }
        if(elem.getAttribute("id") == "sepia") {
            App.doSepia();   
        }
        if(elem.getAttribute("id") == "addContrast") {
            App.addContrast();
        }
        if(elem.getAttribute("id") == "reduceContrast") {
            App.reduceContrast();
        }
        if(elem.getAttribute("id") == "ordinary") {
             App.variables.ctx.drawImage(App.variables.img, 0, 0, App.variables.canvasW, App.variables.canvasH);
        }
        App.variables.ctx.save();
    },

    setBorder : function(elem) {
        let arr = elem.parentNode.children;
        for(var k of arr){
           if(k.getAttribute("class") == "activeBorder") {
                k.removeAttribute("class");
                App.variables.ctx.restore(); //не работает
           }
        }
        elem.setAttribute("class", "activeBorder");
        if(elem.getAttribute("class") == "activeBorder") {
            App.variables.ctx.drawImage(elem, 0, 0, App.variables.canvasW, App.variables.canvasH);
        }
        App.variables.ctx.drawImage(elem, 0, 0, App.variables.canvasW, App.variables.canvasH);
    },

    clear : function() {
        let data = App.variables.ctx.getImageData(0, 0, App.variables.canvasW, App.variables.canvasH);
        let len = data.data.length;
        for(var i = 0; i < len; i++){
            data.data[i] = 0;
        }
        App.variables.ctx.putImageData(data, 0, 0);
    }
}

App.start();