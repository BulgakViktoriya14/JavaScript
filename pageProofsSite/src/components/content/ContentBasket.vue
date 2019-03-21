<template>
	<div class="content_basket">
			<h1>Корзина товаров</h1>
			<p style="display: none;">Корзина пуста</p>
			<div id="cart">
				<h2>К оплате:</h2>
				<h3>0</h3><h3>p</h3>
				<button class="order">Заказать</button>
				<div class="purchases" v-for="item of items">
					<div class="cols col-3 purchase">
						<img src="../../image/goods.jpg">
						<h2>название</h2>
						<p>цена</p>
						<button class="butPlus">+</button><input type="text" value="1"><button class="butMinus">-</button>
						<h4>Сумма:</h4>
						<h3>0</h3><h3>р</h3>
					</div>
				</div>			
			</div>
		</div>
		
</template>

<script>
	export default {
   		data() { 
   			return {
   				items:[1,2,3]
   			}
	 	}
  	}
</script>