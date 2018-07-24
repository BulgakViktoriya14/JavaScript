<template>
<div class="main">
	 <div class="back">
        <div class="back-overlay"></div>
     </div>
	<div class="content">
		<div class="auth">
	        <div class="auth_header">
	            <p>Please sign in</p>
	        </div>
	        <div class="auth_input">
	            <Login @sendLogin="myLog=$event"></Login>
	            <Password @sendPassword="myPassw=$event"></Password>
	        </div>
	       <button class="signIn" type="signIn" @click="connect">Sign In</button>
	    </div>
	</div>
</div>
</template>

<script>
	import Login from '../input/Login.vue';
	import Password from '../input/Password.vue';
	import { bus } from '../../eventBus.js';
	
	export default {
		data() {
			return {
				myLog:'',
				myPassw:'',
				flag: false
			}
		},
		components: {
			Login,
			Password
		},
		methods: {
			connect() { 
				const xhr = new XMLHttpRequest(); 
				xhr.open("POST", this.$root.URL + "/auth"); 
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
				xhr.withCredentials = true; 
				xhr.send(`Login=${this.myLog}&Password=${this.myPassw}`); 
				xhr.onload = function() { 
					if (xhr.status === 200) { 
						let user = JSON.parse(xhr.responseText);
						window.location.href = '/WorkSpace/Reports';

					} 
					else if (xhr.status === 400) { 

					} 
				}
			}
		}
	}
</script>

<style src="../../styles/auth.css"></style>