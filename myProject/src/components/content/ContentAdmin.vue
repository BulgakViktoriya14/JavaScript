<template>
        <div id="content_col">
            <div class="person">
                <img class="avatar" src="../../img/avatar.jpg">
                <h1>Surname Name</h1>
                <h3>Administrator</h3>
			</div>
			<div class="users">
                <GetListUsers></GetListUsers>
            </div>
            <div class="names" id="users_name" @click="chooseUser">
                <span>
                    <p>Иванов Иван</p>
                    <div style="display:none">Логин</div>
                    <div style="display:none">Роль</div>
                </span>
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
    import request from "../../request.js"
    import GetListUsers from "../buttons/chooseUsers.vue"
    import { bus } from '../../eventBus.js';

	export default {
		data() {
			return {
                listUsers: [],
                
			}
		},
		components: {
			AddUser,
            DeleteUser,
            GetListUsers
		},
        methods: {
            chooseUser(e) {
                console.log(e.target);
                bus.$emit("sendUserData",[e.target, e.target.parentNode.children[1], e.target.parentNode.children[2]])
                window.location.href = "/WorkSpace/User";
            }
        }
	}
</script>

<style src="../../styles/admin.css"></style>