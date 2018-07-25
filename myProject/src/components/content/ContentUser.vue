<template>
    <div>
        <div class="person">
            <img class="avatar" src="../../img/avatar.jpg">
        </div>
        <div class="right_part">
            <div class="name">
                <h1>{{nameUser}}</h1>
            </div>
            <div class="admin_view">
                <div class="text">
                    <p>View:</p>
                </div>
                <div class="buttons">
                    <ul class="admin_buttons">
                        <ButTime></ButTime>
                        <ButRep></ButRep>
                        <butTasks></butTasks>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import ButTime from '../buttons/butTime.vue'
    import ButRep from '../buttons/butRep.vue'
    import ButTasks from '../buttons/butTasks.vue'
    import { bus } from '../../eventBus.js';

	export default {
		data() {
			return {
                nameUser: "",
                loginUser: "",
                roleUser: ""
			}
		},
		components: {
			ButTime,
            ButRep,
            ButTasks
		},
        methods: {
            
        },
        created() {
            bus.$on("sendUserData", ([name, login, role]) => {
                this.nameUser = name;
                this.loginUser = login;
                this.roleUser = role;
                console.log(this.nameUser);
            })
        }
	}
</script>

<style src="../../styles/cabinet.css"></style>