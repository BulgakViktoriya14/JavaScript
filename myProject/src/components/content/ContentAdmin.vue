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
                    <p login='user1' role='user' id="id">Иванов Иван</p>
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
    import store from '../../vuex.js';

	export default {
		data() {
			return {                
			}
		},
		components: {
			AddUser,
            DeleteUser,
            GetListUsers
		},
        methods: {
            chooseUser(e) {
                const currentUser = e.target;
                store.state.userId = currentUser.getAttribute('id');
                /*bus.$emit("sendUserData",
                    [
                        currentUser.innerText, 
                        currentUser.getAttribute('login'), 
                        currentUser.getAttribute('role')
                        currentUser.getAttribute('id')
                    ]);
                    */
                window.location.href = `/WorkSpace/User?Name=${currentUser.innerText}`;
            }
        }
    }
    
    //e.target - возврат элемента на котором произошло событие. Т.е. при клике на таймтэйл
    // можно доставать через e.target id и потом играться с ним
</script>

<style src="../../styles/admin.css"></style>