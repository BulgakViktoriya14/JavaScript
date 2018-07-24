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

function Ok() {
  if(this.user.Role == "admin") {
    window.location.href = "/WorkSpace/Admin";
  }
  if(this.user.Role == "user") {
    window.location.href = "/WorkSpace/User";
  }
}
function BadRequest() {
  swal({ type: "error", title: "Oops...", text: "Bad credentials!" });
}
export default {
  data() {
    return {
      myLog: "",
      myPassw: "",
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
        var user =  JSON.parse(xhr.responseText); 
        if(xhr.status == 200) {
            if(user.Role == "admin") {
                window.location.href = "/WorkSpace/Admin";
            }
            if(user.Role == "user") {
                window.location.href = "/WorkSpace/User";
            }
        }
        if(xhr.status == 400) {
            BadRequest();
        }
      };
    }
  }
};
</script>

<style src="../../styles/auth.css"></style>