<template>
	<div class="content_catalog">
			<h2>{{title}}</h2>
			<VerticalMenu></VerticalMenu>
			<div class="products">
				<div class="menu_products">
					<ViewGood></ViewGood>
				</div>
			</div>
			<div class="seeds_product">
				<div class="goods">
					<Good></Good>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	import Good from "../good/Good.vue";
	import ViewGood from "../good/ViewGood.vue";
	import VerticalMenu from "../menu/VerticalMenu.vue";
	//import Title from "../title/Title.vue"
	import {bus} from '../../eventBus';
	import getData from '../../helpers/getData';

	export default {
   		data() { 
   			return { 				
   				url:'',
   				title:''
   			}
	 	},
	 	components: {
	 		Good,
	 		ViewGood,
	 		VerticalMenu,
	 		//Title
	 	},
	 	watch: {
    		'$route': 'fetchData'
  		},
  		created() {
  			this.fetchData();			
  		},
  		methods: {
  			fetchData () {
  				this.url = window.location.pathname;
  				var nameView = this.url.replace("/catalog/",'');	
  				if(nameView == "flowers") {this.title = "Семена цветов";}
  				if(nameView == "vegetables") {this.title = "Семена овощей";}
  				if(nameView == "spicy-aromatic") {this.title = "Семена пряно-ароматические";}
  				if(nameView == "berries-and-fruits") {this.title = "Семена ягод и фруктов";}
  				if(nameView == "herbs") {this.title = "Семена трав";}
  				if(nameView == "for-garden") {this.title = "Всё для сада";}
  				getData(nameView);
    		}
  		}
  	}
</script>