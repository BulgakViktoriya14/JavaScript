<template>
	<button class="phone_menu_checkbox" type="checkbox" @click="clickBurger"><img src="../../../image/menu.png"></button>
</template>

<script>
	import {bus} from '../../../eventBus';
	export default {
   		data() { 
   			return { 
   				flag:false
   			}
	 	},
	 	methods: {
	 		clickBurger() {
	 			this.flag == false ? this.flag = true : this.flag = false;
	 			bus.$emit("openMenu", this.flag);
			}
		}
	}
</script>
