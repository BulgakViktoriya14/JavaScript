var array=new Array();
array[0]={
	country: 'Россия',
	flag: 'img/1.jpg',
	cod: '7',
	countPeople: '146 880 432'
	}
array[1]={
	country: 'Беларусь',
	flag: 'img/2.jpg',
	cod: '375',
	countPeople: '9 491 800'
	}
array[2]={
	country: 'Польша',
	flag: 'img/3.jpg',
	cod: '48',
	countPeople: '37 967 209'
	}
array[3]={
	country: 'Литва',
	flag: 'img/4.jpg',
	cod: '370',
	countPeople: '2 888 558'
	}
array[4]={
	country: 'Латвия',
	flag: 'img/5.jpg',
	cod: '371',
	countPeople: '1 968 957'
	}
array[5]={
	country: 'Украина',
	flag: 'img/6.jpg',
	cod: '380',
	countPeople: '42 650 186'
	}	
array[6]={
	country: 'Германия',
	flag: 'img/7.jpg',
	cod: '49',
	countPeople: '82 175 684'
	}
array[7]={
	country: 'Великобритания',
	flag: 'img/8.jpg',
	cod: '44',
	countPeople: '65 341 183'
	}
array[8]={
	country: 'Чехия',
	flag: 'img/9.jpg',
	cod: '420',
	countPeople: '10 553 843'
	}
array[9]={
	country: 'Болгария',
	flag: 'img/10.jpg',
	cod: '359',
	countPeople: '7 153 784'
	}	
array[10]={
	country: 'Франция',
	flag: 'img/11.jpg',
	cod: '33',
	countPeople: '64 513 242'
	}
array[11]={
	country: 'Италия',
	flag: 'img/12.jpg',
	cod: '39',
	countPeople: '60 665 55'
	}

var table=document.createElement("table");
document.body.appendChild(table);
table.innerHTML="<tr><td>Страна</td><td>Флаг</td><td>Население</td><td>Телефонный код</td></tr>";
for(var i=0; i<array.length; i++){
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