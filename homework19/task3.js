var video = document.querySelector("video");
var playBut = document.getElementById("play");
var stopBut = document.getElementById("stop");
var noSoundBut = document.getElementById("noSound");
var div = document.getElementById("time");
var pl = document.querySelector("#play img");
var slowDown = document.getElementById("slowDown");
var normalSpeed = document.getElementById("normalSpeed");
var speedUp = document.getElementById("speedUp");
var scaleTime = document.getElementById("scaleTime");
var but = document.getElementById("button");
scaleTime.setAttribute("max",parseInt(video.duration));

video.addEventListener("loadedmetadata", function() {
	video.loop = true;
})

stopBut.addEventListener("click", function() {
	video.currentTime = 0;
	video.pause();
    pl.setAttribute("src", "play.png");
})

playBut.addEventListener("click", function() {
	if( video.paused ){
		video.play();
		pl.setAttribute("src", "pause.png");
	} else {
		video.pause();
		pl.setAttribute("src", "play.png");
	}
})

noSoundBut.addEventListener("click",function() {
	if( video.muted == false ) {
		video .muted = true
	} else {
		video.muted = false
	}
})

sound.addEventListener("input",function(){
	var sound = document.getElementById("sound").value;
	video.volume = sound / 100;
})

speedUp.addEventListener("click",function() {
    video.play();
    video.playbackRate += 0.2;
})

slowDown.addEventListener("click",function() {
    video.play();
    video.playbackRate -= 0.2;
})

normalSpeed.addEventListener("click", function() {
    video.play();
    video.playbackRate = 1;
})

scaleTime.addEventListener("input", function() {
	video.currentTime = scaleTime.value;
})

video.addEventListener("loadedmetadata", function() {
	scaleTime.setAttribute("max",parseInt(video.duration));
	setInterval( function() {
		scaleTime.value = parseInt(video.currentTime);
		var[hh, mm, ss, h, m, s] = [ parseInt(video.currentTime / 3600), parseInt(video.currentTime / 60),
		parseInt(video.currentTime % 60), parseInt(video.duration / 3600), parseInt(video.duration / 60), parseInt(video.duration % 60) ];
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
		div.innerText = hh + ":" + mm + ":" + ss + "/" + h + ":" + m + ":" + s;
	}, 1000);
}, true)

but.addEventListener("click", function() {
	var files = input.files; 
	var file = files[0];
	var reader = new FileReader(); 
	reader.addEventListener("load", function(){
		video.setAttribute("src", this.result); 
	}) 
	reader.readAsDataURL(file); 
})
