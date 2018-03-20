//Задание 1. Проверить правильно ли расставлены скобки в тексте.
alert("Задание №1");
var boolt=true;
var boolf=false;
var text=prompt("Введите текст");
function f(t){
	var k=0;
	var h=0;
	for(var i=0; i<t.length; i++){
		if(k<0){
			h++;
		}
		if(t[i]=="("){
			k++;
		}else 
		if(t[i]==")"){
		k--;
		}
	}
	if(k!=0 || h>0){
		alert(boolf);
	}
	else{
		alert(boolt);
	}
}
f(text);

//Задание 2. Калькулятор для двух чисел и 5 арифметических действий.
alert("Задание №2");
var num1=Number(prompt("Введите первое число"));
var sign=prompt("Введите знак");
var num2=Number(prompt("Введите второе число"));
if(num1.toString()!="NaN" && num2.toString()!="NaN"){
	switch(sign){
		case "+":
			alert(num1+num2);
			break;
		case "-":
			alert (num1-num2);
			break;
		case "*":
			alert(num1*num2);
			break;
		case "/":
			alert(num1/num2);
			break;
		case "%":
			alert(num1%num2);
			break;
		default:
			alert("Введен не верный знак!");
			break;
	}
}
else{
	alert("Ошибка при вводе чисел!");
}

