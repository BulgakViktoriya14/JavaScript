var body=document.body;
var load=function(){
	var xhr=new XMLHttpRequest;
	xhr.open("GET","task3.txt",true);
	xhr.onload=function(){
		body.innerHTML+=this.responseText;
	}
	xhr.send(null);
}
window.addEventListener("scroll",function(){
	if(body.lastElementChild.getBoundingClientRect().bottom < innerHeight){
		load();
	}
});
load();

