var i=1;
function Good(title,type,price,dateIssue){
	this.title=title;
	this.type=type;
	this.price=price;
	this.dateIssue=dateIssue;
	Object.defineProperty(this,"id",{
		get:function(){
			return i++;
		}
	})
}

function foodProduct(title,type,price,dateIssue,validUntil){
	this.constructor(title,type,price,dateIssue);
	this.validUntil=validUntil;
	Object.defineProperty(this, "shelfLife",{
		get:function(){
			return Math.floor(new Date(this.validUntil)-new Date(this.dateIssue))/3600000/24;
		}
	})
}
foodProduct.prototype=Object.create(Good.prototype);

var milk=new foodProduct("Молоко","молочный продукт",1,"2018-04-15 09:00:00","2018-04-23 09:00:00");
console.log(milk);

function Shop(name,adress,markUp){
	this.name=name;
	this.adress=adress;
	this.markUp=markUp;
	this.income=0;
	this.goods=new Array();
	this.sum=0;
}
Shop.prototype={
	sumAllGoods:function(){
		for(var i = 0; i < this.goods.length; i++){
			this.sum += this.goods[i].price;
		}
	},
	addGoods:function(t,n){
		for(var i = 0; i < n; i++){
			this.goods.push(t);
		}
		this.sumAllGoods();
	},
	deleteGoods:function(t,n){
		for(var i = 0; i < n; i++){
			for(var g=0; g<this.goods.length; g++){
				if(this.goods[g].name==t.name){
					this.goods.slice(g,1);
				}
			}
		}
		this.sumAllGoods();
	},
	sellGoods:function(t,n){
		this.income=n*t.price*(this.markUp/100);
		this.deleteGoods(t,n);
		this.sumAllGoods();
	},
	info:function(){
		if(("name" in this) &&("adress" in this)&&("markUp" in this)&&("income" in this)&&
			("goods" in this)&&("sumAllGoods" in this)&&("addGoods" in this)&&
			("deleteGoods" in this)&&("sellGoods" in this)){
			console.log("Название магазина: ",this.name, ". Адрес: ",this.adress,". Наценка:",this.markUp,
				"%. Прибыль: ",this.income,"p. Товар: ",this.goods,". Сумма всего товара: ",this.sum,"р.")
		}
	},
	constructor:Shop
}

var shop=new Shop("Рублёвский","ул.Петра Глебки",15);
shop.addGoods(milk,2);


var nameShops=new Array();
function Market(){
	this.shops = new Array();
}
Market.prototype = {
	addShop:function(sh){
		this.shops.push(sh);
	},
	infoShops:function(){
		this.shops.forEach(function(){
			nameShops.push(shop.name);
			shop.info();
		});
		console.log(nameShops);
	},
	constructor : Market
}
var market=new Market();
market.addShop(shop);
market.infoShops();