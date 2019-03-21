<template>
	<div class="menu_for_phone" v-bind:class="{active_mob: isActive}">
		<router-link tag="li" to="/main-page" class="menu_item"><a href="">Главная</a></router-link>
		<router-link tag="li" to="/catalog" class="menu_item catalog"><a href="">Каталог</a>
			<ul class="submenu">
				<router-link class="submenu_item" tag="li" to="/catalog/flowers"><a href="">Семена цветов</a></router-link>
				<router-link class="submenu_item" tag="li" to="/catalog/vegetables"><a href="">Семена овощей</a></router-link>
				<router-link class="submenu_item" tag="li" to="/catalog/spicy-aromatic"><a href="">Семена пряно-ароматические</a></router-link>
				<router-link class="submenu_item" tag="li" to="/catalog/berries-and-fruits"><a href="">Семена ягод и фруктов</a></router-link>
				<router-link class="submenu_item" tag="li" to="/catalog/herbs"><a href="">Семена трав</a></router-link>
				<router-link class="submenu_item" tag="li" to="/catalog/for-garden"><a href="">Товары для сада</a></router-link>
			</ul>
		</router-link>
		<router-link class="menu_item" tag="li" to="/delivery-and-payment"><a href="">Доставка и оплата</a></router-link>
		<router-link class="menu_item" tag="li" to="/about"><a href="">О нас</a></router-link>
	</div>
</template>

<script>
	import {bus} from '../../eventBus';

	export default {
   		data() { 
   			return { 
   				isActive:false
   			}
	 	},
	 	created () {
  			bus.$on("openMenu",date => {
  				this.isActive = date;
  			})
  		}
}
</script>