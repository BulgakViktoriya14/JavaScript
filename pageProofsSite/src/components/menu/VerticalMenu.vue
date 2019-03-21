<template>
	<div class="vertical_menu">
		<li  v-for="view of arrayView"><a href="">{{view.name}}</a></li>	
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