<template>
   	<div class="row">
		<div class="cols col-4 mob_version">
			<FormSearch></FormSearch>
		</div>
		<div class="cols col-4 header2">
			<Logo></Logo>
		</div>
		<div class="cols col-4 header2 mob_version">
			<Basket></Basket>
		</div>
	</div>
</template>

<script>
	import FormSearch from "./partOfHeader2/FormSearch.vue";
	import Logo from "./partOfHeader2/Logo.vue";
	import Basket from "./partOfHeader2/Basket.vue";

	export default {
   		data() { return { }
	 	},
	 	components: {
	    	FormSearch,
	    	Logo,
	    	Basket
	  	}
	}
</script>
