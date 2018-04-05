var div=document.getElementById("timer");
var caption=document.createElement("h1");
var time=document.createElement("p");
div.appendChild(caption);
div.appendChild(time);
time.color=function(){
		this.style.color='red';
	};
setInterval(function(){
	var now = new Date();
	var h= now.getHours();
	var m= now.getMinutes();
	var s= now.getSeconds();
	var hh = parseInt(23-h);
	var mm =parseInt(59-m);
	var ss = parseInt(59-s);
	var hours, minutes, seconds;
	if(hh>=0 && hh<=9){
		hours="0"+hh;
	}
	else{
		hours=hh;
	}
	if(mm>=0 && mm<=9){
		minutes="0"+mm;
	}
	else{
		minutes=mm;
	}
	if(ss>=0 && ss<=9){
		seconds="0"+ss;
	}
	else{
		seconds=ss;
	}
	caption.innerHTML="До конца дня осталось: ";
	if(mm==0){
		time.style.color="black";
	}
	if(mm%2==0){
		time.style.color="green";
	}
	else{
		time.style.color="red";
	}
	time.innerHTML=hours + ":" + minutes + ":" + seconds;
}, 1000);
