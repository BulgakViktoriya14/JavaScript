var div = document.getElementById("content");

window.addEventListener("scroll",function(){
	var rect=div.getBoundingClientRect();
	if(rect.top < 10){
		div.classList.add('fixed');
	}
	if(window.scrollY <= 5000){
		div.classList.remove('fixed');
	}
	if(window.scrollY >= 15000){
		div.classList.remove('fixed');
	}
});