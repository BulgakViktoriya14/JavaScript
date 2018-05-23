var App = {
    variables: {
        canvas: document.getElementById("canvas"),
        buttons: document.getElementById("buttons"),
        ctx: canvas.getContext("2d"),
        imgW: canvas.width,  
        imgH: canvas.height,  
        img: document.getElementById("img")
    },

    start: function(){
        App.variables.ctx.drawImage(App.variables.img, 0, 0, App.variables.imgW, App.variables.imgH);
        let imgPixels = App.variables.ctx.getImageData(0, 0, App.variables.imgW, App.variables.imgH);
        let len =  imgPixels.width * imgPixels.height; 
        App.variables.buttons.addEventListener("click",function(e) {
            if(e.target.getAttribute("id") == "black_white") {
                App.doBlackWhite();    
            }
            if(e.target.getAttribute("id") == "negative") {
                App.doNegative();
            }
            if(e.target.getAttribute("id") == "sepia") {
                App.doSepia();   
            }
        })
    },

    doBlackWhite: function() {
        App.variables.ctx.drawImage(App.variables.img, 0, 0, App.variables.imgW, App.variables.imgH);
        let imgPixels = App.variables.ctx.getImageData(0, 0, App.variables.imgW, App.variables.imgH);
        let len =  imgPixels.width * imgPixels.height; 
        for(var i = 0; i < len; i++){   
            let temp = (imgPixels.data[4 * i] + imgPixels.data[4 * i + 1] + imgPixels.data[4 * i + 2]) / 3;  
            imgPixels.data[4 * i] = temp;   
            imgPixels.data[4 * i + 1] = temp;   
            imgPixels.data[4 * i + 2] = temp;  
        }    
        App.variables.ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    },

    doNegative: function() {
        App.variables.ctx.drawImage(App.variables.img, 0, 0, App.variables.imgW, App.variables.imgH);
        let imgPixels = App.variables.ctx.getImageData(0, 0, App.variables.imgW, App.variables.imgH);
        let len =  imgPixels.width * imgPixels.height;  
        for(var i = 0; i < len; i++) {    
            imgPixels.data[4 * i] = 255 - imgPixels.data[4 * i];   
            imgPixels.data[4 * i + 1] = 255 - imgPixels.data[4 * i + 1];   
            imgPixels.data[4 * i + 2] = 255 - imgPixels.data[4 * i + 2];  
        }  
        App.variables.ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    },

    doSepia: function() {
        App.variables.ctx.drawImage(App.variables.img, 0, 0, App.variables.imgW, App.variables.imgH);
        let imgPixels = App.variables.ctx.getImageData(0, 0, App.variables.imgW, App.variables.imgH);
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

}

App.start();