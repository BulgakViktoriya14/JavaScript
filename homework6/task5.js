var user = document.getElementById('name');
var number = document.getElementById('phone');
var mail = document.getElementById('email');
var site = document.getElementById('web_site');
var year = document.getElementById('age');
var button = document.getElementById('but');

function checkName(user){
	var pattern=user.match(/^[a-zA-Zа-яА-Я\s\-]{3,20}$/);
	if(pattern){
		 return true;
	}
	else{
		return false;
	}
}
function checkPhone(number){
	var pattern=number.match(/^[\+\s]?(375)[\-\s\(]?(29)|(33)|(44)|(25)[\)\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/);
	if(pattern){
		 return true;
	}
	else{
		return false;
	}
}
function checkEmail(mail){
	var pattern=mail.match(/^[a-z][a-zA-Z0-9\.]*@[a-z][a-z0-9]*\.[a-z]{2,10}\.?$/);
	if(pattern){
		 return true;
	}
	else{
		return false;
	}
}
function checkSity(site){
	var pattern=site.match(/^(http:|https:)\/\/[A-Za-z]*\.?[a-zA-Zа-яА-Я]{2,}\.[a-zA-Zа-яА-Я]*\.?[a-zA-Zа-яА-Я]{2,}$/);
	if(pattern){
		 return true;
	}
	else{
		return false;
	}
}
function checkAge(year){
	if(year>=14 && year<=90){
		 return true;
	}
	else{
		return false;
	}
}

user.addEventListener('input', function(){
	if(checkName(this.value)){
		this.setAttribute("class","well");
	}
	else{
		this.setAttribute("class","error");
	}
});
number.addEventListener('input', function(){
	if(checkPhone(this.value)){
		this.setAttribute("class","well");
	}
	else{
		this.setAttribute("class","error");
	}
});
mail.addEventListener('input', function(){
	if(checkEmail(this.value)){
		this.setAttribute("class","well");
	}
	else{
		this.setAttribute("class","error");
	}
});
site.addEventListener('input', function(){
	if(checkSity(this.value)){
		this.setAttribute("class","well");
	}
	else{
		this.setAttribute("class","error");
	}
});
year.addEventListener('input', function(){
	if(checkAge(this.value)){
		this.setAttribute("class","well");
	}
	else{
		this.setAttribute("class","error");
	}
});
button.addEventListener('click',function(){
	if(checkName(user.value) && checkPhone(number.value) && checkEmail(mail.value) && checkSity(site.value) && checkAge(year.value)){
		alert("Все данные введены верно");
	}
	else{
		alert("Ошибка при введении данных");
	}
});