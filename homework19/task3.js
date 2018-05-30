var App = {
	variables: {
		video : document.querySelector("video"),
		playBut : document.getElementById("play"),
		stopBut : document.getElementById("stop"),
		noSoundBut : document.getElementById("noSound"),
		div : document.getElementById("time"),
		pl : document.querySelector("#play img"),
		slowDown : document.getElementById("slowDown"),
		normalSpeed : document.getElementById("normalSpeed"),
		speedUp : document.getElementById("speedUp"),
		scaleTime : document.getElementById("scaleTime"),
		but : document.getElementById("button"),
	},
	start: function() {
		App.variables.scaleTime.setAttribute("max",parseInt(App.variables.video.duration));
		App.variables.video.addEventListener("loadedmetadata", function() {
			App.variables.video.loop = true;
		})

		App.variables.stopBut.addEventListener("click", function() {
			App.variables.video.currentTime = 0;
			App.variables.video.pause();
    		App.variables.pl.setAttribute("src", "play.png");
		})

		App.variables.playBut.addEventListener("click", function() {
			if( App.variables.video.paused ){
				App.variables.video.play();
				App.variables.pl.setAttribute("src", "pause.png");
			} else {
				App.variables.video.pause();
				App.variables.pl.setAttribute("src", "play.png");
			}
		})

		App.variables.noSoundBut.addEventListener("click",function() {
			if( App.variables.video.muted == false ) {
				App.variables.video .muted = true
			} else {
				App.variables.video.muted = false
			}
		})

		sound.addEventListener("input",function(){
			var sound = document.getElementById("sound").value;
			App.variables.video.volume = sound / 100;
		})

		App.variables.speedUp.addEventListener("click",function() {
		    App.variables.video.play();
		    App.variables.video.playbackRate += 0.2;
		})

		App.variables.slowDown.addEventListener("click",function() {
		    App.variables.video.play();
		    App.variables.video.playbackRate -= 0.2;
		})

		App.variables.normalSpeed.addEventListener("click", function() {
		    App.variables.video.play();
		    App.variables.video.playbackRate = 1;
		})

		App.variables.scaleTime.addEventListener("input", function() {
			App.variables.video.currentTime = scaleTime.value;
		})

		App.variables.video.addEventListener("loadedmetadata", function() {
			App.variables.scaleTime.setAttribute("max",parseInt(App.variables.video.duration));
			setInterval( function() {
				App.variables.scaleTime.value = parseInt(App.variables.video.currentTime);
				var buff = App.variables.video;
				var[hh, mm, ss, h, m, s] = [ parseInt(buff.currentTime / 3600), parseInt(buff.currentTime / 60),
				parseInt(buff.currentTime % 60), parseInt(buff.duration / 3600), parseInt(buff.duration / 60), parseInt(buff.duration % 60) ];
				if( h >= 0 && h < 10 ) {
					h = "0" + h;
				}
				if( hh >=0 && hh < 10 ) {
					hh = "0" + hh;
				}
				if( m >= 0 && m < 10 ) {
					m = "0" + m;
				}
				if( mm >=0 && mm < 10 ) {
					mm = "0" + mm;
				}
				if( ss >= 0 && ss < 10 ) {
					ss = "0" + ss;
				}
				if( s >= 0 && s < 10 ) {
					s = "0" + s;
				}
				App.variables.div.innerText = hh + ":" + mm + ":" + ss + "/" + h + ":" + m + ":" + s;
			}, 1000);
		}, true)

		App.variables.but.addEventListener("click", function() {
			var files = input.files; 
			var file = files[0];
			var reader = new FileReader(); 
			reader.addEventListener("load", function(){
				App.variables.video.setAttribute("src", this.result); 
			}) 
			reader.readAsDataURL(file); 
		})
	}
}

App.start();



