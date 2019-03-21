<template>
	<div class="content_main_page">
		<Gallery></Gallery>
		<MainPageText></MainPageText>
		<NewGoods></NewGoods>
		<PopularGoods></PopularGoods>
	</div>
</template>


<script>
	import Gallery from "../gallery/Gallery.vue";
	import MainPageText from "../mainPageText/MainPageText.vue";
	import NewGoods from "../categories/NewGoods.vue";
	import PopularGoods from "../categories/PopularGoods.vue";

	export default {
   		data() { 
   			return { }
	 	},
	 	components: {
	 		Gallery,
	 		MainPageText,
	 		NewGoods,
	 		PopularGoods
	 	}
  	}
</script>