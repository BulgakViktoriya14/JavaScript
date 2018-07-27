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
            </div>
            <div class="buttonsAdmin">
                <AddUser></AddUser>
                <DeleteUser></DeleteUser>
                <LogOut></LogOut>
            </div>
        </div>
</template>

<script>
	import AddUser from '../buttons/addUser.vue'
    import DeleteUser from '../buttons/deleteUser.vue'
    import request from "../../request"
    import GetListUsers from "../buttons/chooseUsers.vue"
    import { bus } from '../../eventBus.js';
    import LogOut from '../buttons/logOut.vue'

	export default {
		data() {
			return {
                listUsers: []                
			}
		},
		components: {
			AddUser,
            DeleteUser,
            GetListUsers,
            LogOut
		},
        methods: {
            chooseUser(e) {
                const currentUser = e.target;
                this.$store.commit('setName', currentUser.innerText);
                this.$store.commit('setId', currentUser.getAttribute('userID'));
                this.$router.push('/WorkSpace/User');
            }
        }
    }
</script>

<style src="../../styles/admin.css"></style>