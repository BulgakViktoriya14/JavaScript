var array=new Array(20);
array.fill(0);
var people=new Array('Павел Шиколай','Лиханова Ксения','Утлик Алиса',
	'Агеенко Ирина','Денис Круглик','Загоровский Артём','Кондратович Максим', 
	'Алисеенко Мария','Серединский Тимофей','Чикова Екатерина', 'Димидюк Кирилл');
var cities=new Array('Минск','Витебск','Могилёв','Брест','Гродно','Лида',
	'Бобруйск','Браслав','Полоцк','Новополоцк','Глубокое','Миоры','Докшицы',
	'Барановичи','Держинск','Бегомоль', 'Мозырь');
var goods=new Array('Бананы','Яблоки','Груши','Клубника','Мандарины','Апельсины',
	'Огурцы','Помидоры','Морковка','Капуста');
	setInterval(function(){
		for(i in array){
			array[i]={
			name: people[Math.round(Math.random()*(people.length-1))],
			N: Math.round(Math.random()*30+1),
			city: cities[Math.round(Math.random()*(cities.length-1))],
			good: goods[Math.round(Math.random()*(goods.length-1))]
			}
		}
		var div=document.createElement("div");
		var text=document.createElement("p");
		document.body.appendChild(div);
		div.setAttribute("id", "window");
		div.appendChild(text);
		for(var i=0; i<array.length; i++){
			text.innerHTML=array[i].name + " купил(а) "+ array[i].good + " " 
			+ array[i].N + " штук " + "г." + array[i].city;
		}
		setInterval(function(){
			div.remove();
		},7000);
}, 3000);