<template>
	<div>
	    <div class="person">
	        <img class="avatar" src="../../img/reg_avatar.jpg">
	    </div>
	    <div class="right_part">
	        <div class="reg_input">
	            <NameUser></NameUser>
	            <SurnameUser></SurnameUser>
	            <EmailUser></EmailUser>
	            <LoginUser></LoginUser>
	            <PasswordUser></PasswordUser>           
	        </div>
	      	<div class="reg_buttons">
	            <button type="save" @click="registrate">Save</button>
	            <button type="cancel" @click="returnToAdminPage">Cancel</button>
	        </div>
	    </div>
	</div>
</template>

<script>
	import NameUser from '../partOfCheckIn/Name.vue';
	import SurnameUser from '../partOfCheckIn/Surname.vue';
	import EmailUser from '../partOfCheckIn/Email.vue';
	import LoginUser from '../partOfCheckIn/Login.vue';
	import PasswordUser from '../partOfCheckIn/Password.vue';
	import {bus} from '../../eventBus';
	import request from '../../request';
	
	export default {
		data() {
			return {
				name: "",
				surname : "",
				email : "",
				login : "",
				password: ""
			}
		},
		components: {
			NameUser,
			SurnameUser,
			EmailUser,
			LoginUser,
			PasswordUser
		},
		created() {
			bus.$on('nameChange', data => this.name = data );
			bus.$on('surnameChange', data => this.surname = data);
			bus.$on('loginChange', data => this.login = data);
			bus.$on('emailChange', data => this.email = data);
			bus.$on('passwordChange', data => this.password = data);
		},
		methods : {
			registrate() {
				const xhr = request('POST', `${this.$root.URL}/api/users`, `Login=${this.login}&Name=${this.surname} ${this.name}&Email=${this.email}&Password=${this.password}&Role=user`);
				xhr.onload = () => {
					if (xhr.status === 200) window.location.href = '/WorkSpace/Admin';
				}
			},
			returnToAdminPage() {
				window.location.href = '/WorkSpace/Admin';
			}
		}
	}
</script>

<style src="../../styles/registration.css"></style>