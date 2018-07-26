<template>
	<img src="../../img/User.png" alt="user_name" @click="goOnPageUser">
</template>

<script>
	import request from "../../request.js"
	export default {
	data() {
		return {

		}
	},
	methods: {
		goOnPageUser() {
			 const xhr = request(
                "GET",
                `${this.$root.URL}/api/users`
            );
            xhr.onload = function() {
                let currUser = JSON.parse(xhr.responseText);
                if(currUser.Role == "admin") {
                    window.location.href = `/WorkSpace/Admin?Name=${currUser.Name}`;
                }
                if(currUser.Role == "user" || currUser.Role == "helper") {
                    window.location.href == `/WorkSpace/User?Name=${currUser.Name}`;
                }
            } 
		}
	}
}
</script>

<style>
</style>
