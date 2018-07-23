<template>
<div class="main">
	<div class="content">
		<div class="auth">
	        <div class="auth_header">
	            <p>Please sign in</p>
	        </div>
	        <div class="auth_input">
	            <Login @sendLogin="myLog=$event"></Login>
	            <Password @sendPassword="myPassw=$event"></Password>
	        </div>
	       <button class="signIn" type="signIn" @click="conect"><router-link tag="a" to="/WorkSpace/Reports">Sign In</router-link></button>
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
			getUser() {
				const xhr = new XMLHttpRequest();
				xhr.open('GET', this.$root.URL+'/auth'); 
				xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" ); 
				xhr.withCredentials = true; 
				xhr.send(null); 
				xhr.onload = function() {
					let user = JSON.parse(xhr.responseText);
					console.log(user.role);
					if(user.role == "admin") {
						this.flag = true;
					}
					bus.$emit('doFlag', this.flag);
				}
			},
			conect() {
				if(this.myLog.match(/^[a-zA-Z]+[a-zA-Z0-9\-]{6,20}$/)&&this.myPassw.match(/^[a-zA-Z0-9]{7,20}$/)) {
					const xhr = new XMLHttpRequest();
					xhr.open('POST', this.$root.URL+'/auth'); 
					xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" ); 
					xhr.withCredentials = true; 
					xhr.send(`Login=${this.myLog}&Password=${this.myPassw}`); 
					xhr.onload=function() {
						console.log(xhr.responseText);
					}
				} else {
					alert("Ошибка при вводе данных!");
					if(!this.myLog.match(/^[a-zA-Z]+[a-zA-Z0-9\-]{6,20}$/)) {
						console.log(e.target.parentNode.children[1].children[0]);
					}
					if(!this.myPassw.match(/^[a-zA-Z0-9]{7,20}$/)) {
						console.log(e.target.parentNode.children[1].children[1]);
					}
					if(!this.myLog.match(/^[a-zA-Z]+[a-zA-Z0-9\-]{6,20}$/)&&!this.myPassw.match(/^[a-zA-Z0-9]{7,20}$/)) {
						console.log(e.target.parentNode.children[1].children[0]);
							console.log(e.target.parentNode.children[1].children[1]);
					}
				}
				
			}
		}
	}
</script>

<style src="../../styles/auth.css"></style>