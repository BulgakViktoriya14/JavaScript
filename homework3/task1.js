console.log('Задание №1.');
var array=new Array();
var people=new Array('Павел Шиколай','Лиханова Ксения','Утлик Алиса',
	'Агеенко Ирина','Денис Круглик','Загоровский Артём','Кондратович Максим', 
	'Алисеенко Мария','Серединский Тимофей','Чикова Екатерина', 'Димидюк Кирилл');
var cities=new Array('Минск','Витебск','Могилёв','Брест','Гродно','Лида',
	'Бобруйск','Браслав','Полоцк','Новополоцк','Глубокое','Миоры','Докшицы',
	'Барановичи','Держинск','Бегомоль', 'Мозырь');
for(var i in people){
	array[i]={
		name: people[i],
		age: Math.round(Math.random()*(50) + 10),
		city: cities[Math.round(Math.random()*cities.length)],
		print: function(){
			console.log(this.name+", г."+this.city+", "+this.age+" год(-а)/лет");
		}
	}
}
array=array.sort(function(a,b){
	return a.age< b.age ? 1:-1;
})
console.log('Отсортированный массив людей по убыванию возрастов: ');
for (var i in array){
	array[i].print();
}