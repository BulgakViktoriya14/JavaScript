<template>
	<img src="../../img/User.png" alt="user_name" @click="goOnPageUser">
</template>

<script>
	export default {
	data() {
		return {

		}
	},
	methods: {
		goOnPageUser() {
			window.location.href = '/WorkSpace/User';
		}
	}
}
</script>

<style>
</style>
