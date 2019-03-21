<template>
	<div class="new_goods">
		<h2>{{title}}</h2>
		<div class="goods">
			<Good v-for="item of items"></Good>
		</div>
	</div>
</template>

<script>
	import Good from "../good/Good.vue";
	export default {
   		data() { 
   			return {
   				items:[1,2,3,4],
   				title: "НОВЫЕ ТОВАРЫ"
   			}
   		},
   		components: {
   			Good
   		}
  	}
</script>