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
	       <button class="signIn" type="signIn" @click="connect">Sign In</button>
	    </div>
	</div>
</div>
</template>

<script>
import Login from "../input/Login.vue";
import Password from "../input/Password.vue";
import { bus } from "../../eventBus";
import request from "../../request";
import swal from "sweetalert2";
import redirect from '../../helpers/redirect';

const mapOnStatus = {
  200: Ok,
  400: BadRequest
};
function Ok(router) {
  debugger;
  redirect(router);
}
function BadRequest() {
  swal({ type: "error", title: "Oops...", text: "Bad credentials!" });
}
export default {
  data() {
    return {
      myLog: "",
      myPassw: ""
    };
  },
  components: {
    Login,
    Password
  },
  beforeCreate() {
    const role = localStorage.getItem('role');
    const login = localStorage.getItem('login');
    if (role && login) Ok(this.$router);
  },
  methods: {
    connect() {
      const xhr = request(
        "POST",
        `${this.$root.URL}/auth`,
        `Login=${this.myLog}&Password=${this.myPassw}`
      );
      xhr.onload = () => {
        const user = JSON.parse(xhr.responseText);
        localStorage.setItem("login", user.Login);
        localStorage.setItem("role", user.Role);
        localStorage.setItem('name', user.Name);
        mapOnStatus[xhr.status](this.$router);
      };
    }
  }
};
</script>

<style src="../../styles/auth.css"></style>