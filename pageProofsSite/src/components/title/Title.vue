<template>
	<h2>{{title}}</h2>
</template>

<script>
	import {bus} from '../../eventBus';

	export default {
   		data() { 
   			return { 
   				title:''
   			}
	 	},
	 	created() {
  			bus.$on("chooseItemInMenu", (name) => {
  				this.title = name;
  			});
	 		
	 	}	
	}
</script>
