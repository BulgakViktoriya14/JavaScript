<template>
	<button type="users" @click="getListUsers">Users:</button>
</template>
<script>
	import request from "../../request.js";

	export default {
	    data() {
	      return {
	         
	      }
	    },
	    methods: {
	    	getListUsers() {
                const xhr = request (
                 "GET",
                 `${this.$root.URL}/api/users`,
                )
                xhr.onload = function() {
                    let divUsers = document.getElementById("users_name");
                    this.listUsers =  JSON.parse(xhr.responseText);
                    console.log(this.listUsers);
                    for(var us of this.listUsers) {
                        let span = document.createElement("span");
                        span.innerHTML = `<p login=${us.Login} role=${us.Role} id=${us.Id}>${us.Name}</p>`;
                        divUsers.appendChild(span);
                    } 
                }
            },
	    }
    }
</script>