<template>
	<div class="container_gallery" @mouseover="mouseOver" @mouseout="mouseOut">
		<div class="arrows">
			<img src="../../image/left.png" id="left" @click="clickOnLeftArrow" :class="{arrow_noactive:flag}" >
			<img src="../../image/right.png" id="right" @click="clickOnRightArrow" :class="{arrow_noactive:flag}">
		</div>
		<div id="gallery">
			<div v-for="item of array">
				<router-link tag="a" :to="item.url"><img :src="item.img" :class="{image_noactive: item.isActive}"></router-link>
			</div>
		</div>	
	</div>			
</template>

<script>
	export default {
   		data() { 
   			return {
   				array:[{img: require("../../image/flowers.jpg"),
   				url:"/",isActive: false},    
   				    {img: require("../../image/vegetables.jpg"),url:"/",isActive: true},
					{img: require("../../image/spicyaromatic.jpg"),url:"/",isActive: true},
				    {img: require("../../image/fruits.jpg"),url:"/",isActive: true},
				    {img: require("../../image/grass.jpg"),url:"/",isActive: true},
				    {img: require("../../image/allforgarden.jpg"),url:"/",isActive: true}],
				flag: true,
				count:0,
				arrayLen:6
				
   			}
	 	},
   		methods: {
   			mouseOver() {
   				this.flag = false;
   			},
   			mouseOut() {
   				this.flag = true;
   			},
   			clickOnRightArrow() {
   				if(this.count == this.arrayLen-1) {
   					this.array[this.count].isActive = true;
   					this.array[this.count = 0].isActive = false;
   				} else if(this.count < (this.arrayLen-1)) {
   					this.array[this.count].isActive = true;
   					this.array[++this.count].isActive = false;
   				}
   			},
   			clickOnLeftArrow() {
   				if(this.count == 0) {
   					this.array[this.count].isActive = true;
   					this.array[this.count = this.arrayLen-1].isActive = false;
   					
   				} else if(this.count > 0) {
   					this.array[this.count].isActive = true;
   					this.array[--this.count].isActive = false;
   				}
   			}
   		}
  	}
</script>