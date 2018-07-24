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
import { bus } from "../../eventBus.js";
import request from "../../request.js";
import swal from "sweetalert2";
const map = {
  200: Ok,
  400: BadRequest
};
function Ok() {
  window.location.href = "/WorkSpace/Reports";
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
      xhr.onload = function() {
        console.log(xhr.status);
        map[xhr.status]();
      };
    }
  }
};
</script>

<style src="../../styles/auth.css"></style>