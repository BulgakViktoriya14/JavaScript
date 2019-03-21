<template>
	<div class="container">
  		<header>
  			<Header1></Header1>
  			<Header2></Header2>
  			<HeaderMob></HeaderMob>
  		</header>
  		<Menu></Menu>
  		<MenuMob></MenuMob>
  		<router-view></router-view>
  		<Footer></Footer>
	</div>
</template>

<script>
	import Header1 from "./components/header/Header1.vue";
	import Header2 from "./components/header/Header2.vue";
	import HeaderMob from "./components/header/HeaderMob.vue";
	import Menu from "./components/menu/Menu.vue";
	import MenuMob from "./components/menu/MenuMob.vue";
	import Footer from "./components/footer/Footer.vue"

	export default {
   		data() { 
   			return { }
	 	},
	 	components: {
	    	Header1,
	    	Header2,
	    	HeaderMob,
	    	Menu,
	    	MenuMob,
	    	Footer
	  	}
  	}
</script>

<style src="./styles/style.css"></style>
