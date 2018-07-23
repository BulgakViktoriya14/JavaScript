<template>
	 <input type="password" id="pass" name="pass" placeholder="Password..." @input="changePassword">
</template>

<script>
	export default {
	data() {
		return {
			passw:''
		}
	},
	methods:{
		changePassword(event) {
			this.passw = event.target.value;
			this.$emit('sendPassword',this.passw);
		}
	}
}
</script>

<style>
</style>
