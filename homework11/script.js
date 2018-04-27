var i=0; //счётчик для индификатора товара 
//Good - класс хранит товары
function Good(title,type,price,dateIssue){
	//поля
	this.title=title;   //название товара
	this.type=type;  //тип товара
	this.price=price; //цена товара
	this.dateIssue=dateIssue;  //дата изготовления товара
	this.id=++i; //индификатор товара
}


//foodProduct - класс для хранения продовольственных товаров
//наследуется от класса Good
function foodProduct(title,type,price,dateIssue,validUntil){
	//поля
	this.constructor(title,type,price,dateIssue); //те же что и в классе Good
	this.validUntil=validUntil; // до какого дня годен
	Object.defineProperty(this, "shelfLife",{  //срок годности
		get:function(){
			return Math.floor(new Date(this.validUntil)-new Date(this.dateIssue))/3600000/24;
		}
	})
}
foodProduct.prototype=Object.create(Good.prototype);

//объект класса продовольственный товар
var milk=new foodProduct("Молоко","молочный продукт",1,"2018-04-15 09:00:00","2018-04-23 09:00:00");
console.log(milk);

//Shop - класс для хранения данных магазина 

function Shop(name,adress,markUp){  
	//поля
	this.name=name; //название магазина
	this.adress=adress; //адресс магазина
	this.markUp=markUp;  //наценка магазина
	this.income=0; //приболь магазина
	this.goods=new Array(); //товары магазина
	this.sum=0; //доход магазина
}
Shop.prototype={
	sumAllGoods:function(){   //считает сумму всех товаров в магазине
		for(var i = 0; i < this.goods.length; i++){
			this.sum += this.goods[i].price;
		}
	},
	addGoods:function(t,n){  //добавляет товар t количеством n в магазин
		for(var i = 0; i < n; i++){
			this.goods.push(t);
		}
		this.sumAllGoods();
	},
	deleteGoods:function(t,n){  //удаляет количество n товара t из магазина
		for(var i = 0; i < n; i++){
			for(var g=0; g<this.goods.length; g++){
				if(this.goods[g].name==t.name){
					this.goods.slice(g,1);
				}
			}
		}
		this.sumAllGoods();
	},
	sellGoods:function(t,n){  //продажа товара t количеством n
		this.income=n*t.price*(this.markUp/100);
		this.deleteGoods(t,n);
		this.sumAllGoods();
	},
	info:function(){  //вывод информация о магазине
		if(("name" in this) &&("adress" in this)&&("markUp" in this)&&("income" in this)&&
			("goods" in this)&&("sumAllGoods" in this)&&("addGoods" in this)&&
			("deleteGoods" in this)&&("sellGoods" in this)){
			console.log("Название магазина: ",this.name, ". Адрес: ",this.adress,". Наценка:",this.markUp,
				"%. Прибыль: ",this.income,"p. Товар: ",this.goods,". Сумма всего товара: ",this.sum,"р.")
		}
	},
	constructor:Shop
}

var shop=new Shop("Рублёвский","ул.Петра Глебки",15); //объект класса магазин
shop.addGoods(milk,2);

//Market - класс для хранения информации о рынке

var nameShops=new Array();
function Market(){
	//поле
	this.shops = new Array(); // массив состоящий из магазинов, которые входят в рынок
}
Market.prototype = {
	addShop:function(sh){  //добавляет магазин в рынок
		this.shops.push(sh);
	},
	infoShops:function(){  //выводит информацию о рынке
		this.shops.forEach(function(){
			nameShops.push(shop.name);
			shop.info();
		});
		console.log(nameShops);
	},
	constructor : Market
}
var market=new Market(); //объект класса рынок
market.addShop(shop); 
market.infoShops();