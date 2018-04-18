var menu = document.getElementById('menu');
menu.addEventListener("click", function(e){
	for(var i = 0; i < e.target.children.length; i++){
		if(e.target.children[i].nodeName=="UL"){
			e.target.children[i].classList.toggle("block");
		}
	}
})

menu.addEventListener("click", function(e){
	if(e.target.nodeName=="LI"){
		e.target.classList.toggle("active");
	}
})