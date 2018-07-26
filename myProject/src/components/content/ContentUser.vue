<template>
    <div>
        <div class="person">
            <img class="avatar" src="../../img/avatar.jpg">
        </div>
        <div class="right_part">
            <div class="right_contains">
                <div class="name">
                    <h1>{{name}}</h1>
                </div>
                <div class="log_out">
                    <LogOut></LogOut>
                </div>
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
    import LogOut from '../buttons/logOut.vue'
    import request from '../../request';
	export default {
		data() {
			return {
                name: '',
                login: '',
                role: '',
                id : ''
			}
		},
		components: {
			ButTime,
            ButRep,
            ButTasks,
            LogOut
		},
        methods: {
            
        },
        created() {
          const id = this.$store.getters.getId;  
          const xhr = request('GET', `${this.$root.URL}/api/users/${id}`);
          xhr.onload = () => {
              if (xhr.status === 200) console.log(xhr.responseText);
          }      
        }
	}
</script>

<style src="../../styles/cabinet.css"></style>