<template>
	<div class="phone_header">
		<ButtonBurger></ButtonBurger>
		<PartLogin></PartLogin>
		<PartAccount></PartAccount>		
	</div>
</template>

<script>
	import ButtonBurger from "./partOfMobHeader/ButtonBurger.vue";
	import PartLogin from "./partOfMobHeader/PartLogin.vue";
	import PartAccount from "./partOfMobHeader/PartAccount.vue";

	export default {
   		data() { return { }
	 	},
	 	components: {
	 		ButtonBurger,
	 		PartLogin,
	 		PartAccount
	  	}
	}
</script>
