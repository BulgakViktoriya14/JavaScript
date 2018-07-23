<template>
	<input type="text" id="login" name="login" placeholder="Login..." @input="changeLogin">
</template>

<script>
	export default {
	data() {
		return {
			login:''
		}
	},
	methods:{
		changeLogin(event) {
			this.login = event.target.value;
			this.$emit('sendLogin',this.login);
		}
	}
}
</script>

<style>
</style>
