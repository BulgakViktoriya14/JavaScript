<template>
    <div class="delete">  
         <div class="find">
            <p>Login</p>
            <input type="text" @input="findUser">
          </div>
        <p class="found">{{statusSearch}}</p>
        <div class="del_buttons">
            <button type="delete" @click="deleteUser">Delete</button>
            <button type="cancel" @click="goOnPageAdmin">Cancel</button>
        </div>
    </div>  
</template>

<script>
    import request from "../../request.js";
	export default {
		data() {
			return {
                person:'',
                statusSearch: ''
			}
		},
        methods: {
            findUser(event) {
                this.person =  event.target.value;
                const xhr = request(
                    "GET",
                    `${this.$root.URL}/api/users`,
                    `Login=${this.person}`
                );
                xhr.onload = function() {
                    xhr.status == 200 ? this.statusSearch = "User found" : this.statusSearch = "User not found";
                }
            },
            deleteUser() {
                const xhr = request(
                    "DELETE",
                    `${this.$root.URL}/api/users`,
                    
                );
            },
            goOnPageAdmin() {
                window.location.href = '/WorkSpace/Admin';
            }
        }
	}
</script>

<style src="../../styles/delete.css"></style>