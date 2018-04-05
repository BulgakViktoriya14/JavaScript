var array=new Array(12);
array.fill(0);
var countries=new Array('Россия','Беларусь','Польша','Литва','Латвия','Украина',
	'Германия','Великобритания','Чехия','Болгария','Франция','Италия');
var flags=new Array('img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg',
	'img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg',
	'img/11.jpg','img/12.jpg');
var population=new Array('146 880 432','9 491 800','37 967 209','2 888 558','1 968 957',
	'42 650 186','82 175 684','65 341 183','10 553 843','7 153 784','64 513 242','60 665 55');
var cods=new Array('7','375','48','370','371','380','49','44','420','359','33','39');
for(i in array){
	array[i]={
		country: countries[i],
		flag: flags[i],
		cod: cods[i],
		countPeople: population[i]
		}
	}
console.log(array);
var table=document.createElement("table");
document.body.appendChild(table);
table.innerHTML="<tr><td>Страна</td><td>Флаг</td><td>Население</td><td>Телефонный код</td></tr>";
for(var i=0; i<array.length;i++){
	var tr=document.createElement("tr");
	table.appendChild(tr);
	
	var td=document.createElement("td");
	tr.appendChild(td);
	td.innerHTML= array[i].country;
	
	var td=document.createElement("td");
	tr.appendChild(td);
	var img=document.createElement("img");
	td.appendChild(img);
	img.setAttribute("src", array[i].flag);
	
	var td=document.createElement("td");
	tr.appendChild(td);
	td.innerHTML= array[i].countPeople;

	var td=document.createElement("td");
	tr.appendChild(td);
	td.innerHTML= array[i].cod;
}