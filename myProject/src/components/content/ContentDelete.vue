<template>
    <div class="delete">  
         <div class="find">
            <p>Login</p>
            <input type="text" @input="findUser">
          </div>
        <p class="found">{{statusSearch}}</p>
        <div class="del_buttons">
            <button type="delete">Delete</button>
            <button type="cancel">Cancel</button>
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
                    "POST",
                    `${this.$root.URL}/api/users`,
                    `Login=${this.person}`
                );
                xhr.onload = function() {
                    xhr.status == 200 ? this.statusSearch = "User found" : this.statusSearch = "User not found";
                }
            }
        }
	}
</script>

<style src="../../styles/delete.css"></style>