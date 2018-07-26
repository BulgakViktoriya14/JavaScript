<template>
	<div>
		<div class="registration" name="password" @change="passwordChange">
		       <p>Password</p>
	           <input type="password">
	    </div>
		<div class="registration" name="repassword">
		        <p>Repeate password</p>
				<input type="password">
	    </div>
    </div>
</template>

<script>
import { bus } from "../../eventBus";

export default {
  data() {},
  methods: {
    passwordChange(e) {
      bus.$emit("passwordChange", e.target.value);
    }
  }
};
</script>

<style>
</style>
