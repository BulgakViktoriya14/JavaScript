console.log('Задание №2.');
var persons=new Array();
var names = new Array('Павел Шиколай','Лиханова Ксения',
						'Агеенко Ирина','Круглик Денис',
						'Кондратович Максим', 'Алисеенко Мария', 
						'Чикова Екатерина', 'Димидюк Кирилл');
var branches = new Array('Администрация','Маркетинг',
						'Продажи','Бухгалтерия',
						'Логистика');
for (var i in names) {
	persons[i]={
		name: names[i],
		age: Math.round(Math.random()*(40) + 20),
		branch: branches[Math.round(Math.random()*(branches.length-1))],
		salary: Math.round(Math.random()*(500) + 300),
		experience: Math.round(Math.random()*(100) + 1),
		print: function(){
			console.log("Сотрудник: "+this.name+", "+this.age+" лет, "
			+this.branch+", зарплата: "+this.salary+ "$, стаж работы "+this.experience+" месяц(-а/-ев)");
		}
	}
}
for (var i in persons){
	persons[i].print();
}

persons.addPerson=function(){
persons.push(person={
		name: prompt("Введите фамилию и имя добавляемого сотрудника"),
		age: Math.round(Math.random()*(40) + 20),
		branch: branches[Math.round(Math.random()*(branches.length-1))],
		salary: Math.round(Math.random()*(500) + 300),
		experience: Math.round(Math.random()*(100) + 1),
		print: function(){
			console.log("Сотрудник: "+this.name+", "+this.age+" лет, "
			+this.branch+", зарплата: "+this.salary+ "$, стаж работы "+this.experience+" месяц(-а/-ев)");
		}
	})
	persons.map(function(i){
		i.print();
	})
}
console.log("Добавлен новый сотрудник: ")
persons.addPerson();


persons.deletePerson=function(){
	var n=prompt("Введите фамилию и имя сотрудника, которого хотите уволить");
	for(var i in persons){
		if(n==persons[i].name){
			delete persons[i];
		}
	}
	persons.map(function(i){
		i.print();
	})
}
console.log("Сотрудник уволен: ");
persons.deletePerson();


persons.sortSalary=function(){
	persons.sort(function(a, b){
		return a.salary > b.salary ? 1:-1;
	})
	persons.map(function(i){
		i.print();
	})
}
console.log("Отсортированный список сотрудников по возрастанию зарплаты: ");
persons.sortSalary();

persons.sumSalary=function(){
	var sum=0;
	persons.map(function(i){
		sum+=i.salary;
	})
	return sum;
}
console.log("Суммарная зарплата всех сотрудников: ", persons.sumSalary(), "$");
persons.minSalary=function(){
	var min=persons[0].salary;
	persons.map(function(i){
	 	if(i.salary<min){
	 		min=i.salary;
	 	}
	})
	return min;
}
console.log("Минимальная зарплата: ", persons.minSalary(), "$");

persons.maxSalary=function(){
	var max=persons[0].salary;
	persons.map(function(i){
	 	if(i.salary>max){
	 		max=i.salary;
	 	}
	})
	return max;
}
console.log("Максимальная зарплата: ", persons.maxSalary(), "$");

persons.avgSalary=function(){
	sum=persons.sumSalary();
	return Math.round(sum/(persons.length-1));
}
console.log("Средняя зарплата: ", persons.avgSalary(), "$");

var arr=new Array();
persons.forBranches=function(){
	var b=prompt("Введите отдел, про который хотите узнать информацию");
	console.log("Информация про отдел", b);
	sum=0;
	var avg=0, year=0, avgAge=0, f=0;
	persons.map(function(i){
		if(b==i.branch){
			arr.push(i);
			sum+=i.salary;
			year+=i.age;
		}
	 	avg=Math.round(sum/arr.length);
		avgAge=Math.round(year/arr.length);
	}) 
	console.log("Суммарная зарплата всех сотрудников отдела ",b,"составляет: ",sum, "$");
	console.log("Средняя зарплата отдела ",b, "составляет: ",avg, "$");
	console.log("Количество сотрудников отдела ",b,"составляет: ", arr.length);
	console.log("Средний возраст отдела ",b, "составляет: ",avgAge, "лет");
	for(var i in arr){
		var  maxExp=arr[0].experience;
		if(arr[i].experience>maxExp){
	 			maxExp=arr[i].experience;
	 		}
	 	}
	 for(var i in arr){
	 	if(arr[i].experience==maxExp){
	 		console.log("Дольше всех в отделе ",b," работает: ");
			arr[i].print();
		}
	}
}
persons.forBranches();
