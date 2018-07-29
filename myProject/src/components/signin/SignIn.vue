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

const mapOnStatus = {
  200: Ok,
  400: BadRequest
};
const mapOnRole = {
  admin: "/WorkSpace/Admin",
  user: "/WorkSpace/Users/@",
  helper: "/WorkSpace/Users/@"
};
function Ok(role, store, login) {
  store.commit("setRole", role);
  let URL = mapOnRole[role];
  if (URL.indexOf("@") > -1) URL = URL.replace('@', login);  
  window.location.href = URL;
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
  methods: {
    connect() {
      const xhr = request(
        "POST",
        `${this.$root.URL}/auth`,
        `Login=${this.myLog}&Password=${this.myPassw}`
      );
      xhr.onload = () => {
        const user = JSON.parse(xhr.responseText);
        mapOnStatus[xhr.status](user.Role, this.$store, user.Login);
      };
    }
  }
};
</script>

<style src="../../styles/auth.css"></style>