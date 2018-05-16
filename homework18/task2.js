var canvas = document.getElementById("canvas");
var buttons = document.getElementById("buttons");
var ctx = canvas.getContext("2d");
var imgW = canvas.width;  
var imgH = canvas.height;  

var img = document.getElementById("img");
console.log(img);
ctx.drawImage(img, 0, 0, imgW, imgH);
var imgPixels = ctx.getImageData(0, 0, imgW, imgH);
var len =  imgPixels.width * imgPixels.height ; 

buttons.addEventListener("click",function(e) {
	if(e.target.getAttribute("id") == "black_white") {
		for(var i = 0; i < len; i++){   
            var temp = (imgPixels.data[4 * i] + imgPixels.data[4 * i + 1] + imgPixels.data[4 * i + 2]) / 3;  
            imgPixels.data[4 * i] = temp;   
            imgPixels.data[4 * i + 1] = temp;   
            imgPixels.data[4 * i + 2] = temp;  
        }    
        ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);  
	}
	if(e.target.getAttribute("id") == "negative") {
		for(var i = 0; i < len; i++){    
            imgPixels.data[4 * i] = 255 - imgPixels.data[4 * i];   
            imgPixels.data[4 * i + 1] = 255 - imgPixels.data[4 * i + 1];   
            imgPixels.data[4 * i + 2] = 255 - imgPixels.data[4 * i + 2];  
        }  
        ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
	}
	if(e.target.getAttribute("id") == "sepia") {
        for(var i = 0; i < len; i++){ 
            var red = imgPixels.data[4 * i]; 
            var green = imgPixels.data[4 * i + 1]; 
            var blue = imgPixels.data[4 * i + 2]; 
            imgPixels.data[4 * i] = (red * 0.393) + (green * 0.769) + (blue * 0.189); 
            imgPixels.data[4 * i + 1] = (red * 0.349) + (green * 0.686) + (blue * 0.168); 
            imgPixels.data[4 * i + 2] = (red * 0.272) + (green * 0.534) + (blue * 0.131);
        } 
        ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    } 
})
