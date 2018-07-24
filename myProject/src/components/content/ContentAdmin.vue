<template>
        <div id="content_col">
            <div class="person">
                <img class="avatar" src="../../img/avatar.jpg">
                <h1>Surname Name</h1>
                <h2 class="type">Administrator</h2>
			</div>
			<div class="users">
                <button @click="getListUsers"><h1>Users:</h1></button>
            </div>
            <div class="names" id="users_name" @click="chooseUser">
            </div>
            <div class="buttons">
                <AddUser></AddUser>
                <DeleteUser></DeleteUser>
            </div>
        </div>
</template>

<script>
	import AddUser from '../buttons/addUser.vue'
    import DeleteUser from '../buttons/deleteUser.vue'
    import request from "../../request.js";

	export default {
		data() {
			return {
                listUsers: [],
                
			}
		},
		components: {
			AddUser,
            DeleteUser
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
                        let p = document.createElement("p");
                        p.innerText = `${us.Name}`;
                        console.log(p);
                        divUsers.appendChild(p);
                    } 
                }
            },
            chooseUser(e) {
                console.log(e.target);
                window.location.href = "/WorkSpace/User";
            }
        }
	}
</script>

<style src="../../styles/admin.css"></style>