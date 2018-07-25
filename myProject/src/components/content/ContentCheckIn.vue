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
	            <button type="save">Save</button>
	            <button type="cancel">Cancel</button>
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

	export default {
		data() {
			return {
			
			}
		},
		components: {
			NameUser,
			SurnameUser,
			EmailUser,
			LoginUser,
			PasswordUser
		}
	}
</script>

<style src="../../styles/registration.css"></style>