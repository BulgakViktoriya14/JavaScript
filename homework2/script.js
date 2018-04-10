//Задание №1. Вывести сколько минут осталось доконца дня.
var now = new Date();
var h= now.getHours();
var m= now.getMinutes();
var s= now.getSeconds();
var hh = (23-h)*60;
var mm =(60-m);
var d =hh+mm;
alert("До конца дня осталось: "+d+ " минут ");


/*Задание №2.создать массив из N элементов, элемент массива это коэффициент при х в 
степени номер элемента, вывести этот полином. Ввести х и подставить в полном, что бы получить ответ*/
var N = Number(prompt("Enter n"));
var arr = new Array(N);
var x = Number(prompt("Enter x"));
var polinom = 0;
arr.fill(0);
for(var i in arr){
	arr[i] = Math.round(Math.random()*10);
	polinom += arr[i]*Math.pow(x,i);
}
alert(arr);
alert(polinom);

/*Задание №3.Массив из N элементов заполнить числами s±p%. 
Отсортировать и найти среднее гармоническое. N p s ввести с клавиатуры*/
var n = prompt("Введите количество элементов: "); 
var s = prompt("Введите число для диапазона: "); 
var p = prompt("Введите % разбиения значений: "); 
var c = 0,sum = 0; 
var arr = new Array(); 
for(var i = 0; i < n; i++) { 
	var a = Math.round(Math.random()*s + s*p/100); 
	if(a > (s-(s*p/100)) && a < (s+(s*p/100))) {  
		arr[c] = a; 
		sum += 1/arr[c];
		c++; 
	} 
} 
console.log("Среднее гармоническое: " , Math.round(n/sum)); 
var swp = 0; 
for (var i=c-1; i>=0; i--) { 
	for (var j=0; j<i; j++) { 
		if (arr[j] > arr[j+1]) { 
			swp = arr[j]; 
			arr[j] = arr[j+1]; 
			arr[j+1] = swp; 
		} 
	} 
} 
console.log("Отсортированный массив: " , arr);
