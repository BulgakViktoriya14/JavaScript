<template>
	<div>
		<div class="cols col-4 view_product" v-for="view of arrayView">
			<a href=""><img :src="view.img"></a>
			<h3><a href="">{{view.name}}</a></h3>
		</div>
	</div>
</template>

<script>
	import {bus} from '../../eventBus';

	export default {
   		data() { 
   			return {
   				arrayView:[],
   			}
	 	},
	 	created() {
	 		bus.$on("fillArray", arr => {
  				this.arrayView = arr;
  			})
	 	}
  	}
</script>