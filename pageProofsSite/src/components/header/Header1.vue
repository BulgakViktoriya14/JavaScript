<template>
   	<div class="row">
		<div class="cols col-6 header1 mob_version">
			<PartInfo></PartInfo>
		</div>
		<div class="cols col-6 header1 mob_version">
			<PartLogin></PartLogin>
			<PartAccount></PartAccount>				
		</div>
	</div>
</template>

<script>
	import PartInfo from "./partOfHeader1/PartInfo.vue";
	import PartLogin from "./partOfHeader1/PartLogin.vue";
	import PartAccount from "./partOfHeader1/PartAccount.vue";

	export default {
   		data() { return { }
	 	},
	 	components: {
	    	PartInfo,
	    	PartLogin,
	    	PartAccount
	  	}
	}
</script>
