var input=document.getElementById("fail");
var but=document.getElementById("button");
var div=document.getElementById("content");
var img=document.getElementById("image");
but.addEventListener("click",function(){
	var fail=input.value;
	img.classList.add("load");
	var xhr=new XMLHttpRequest;
	xhr.open("GET",fail,true);
	xhr.onload=function(){
		div.innerHTML=this.responseText;
	}
	xhr.send(null);
});

