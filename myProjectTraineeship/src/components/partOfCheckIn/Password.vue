<template>
		<div class="registration" name="password" @change="passwordChange">
		       <p>Password</p>
	           <input type="password">
	    </div>
		
</template>

<script>
import { bus } from "../../eventBus";

export default {
  data() {},
  methods: {
    passwordChange(e) {
      bus.$emit("passwordChange", e.target.value);
      this.$emit("getPassw",e.target.value);
    }
  }
};
</script>

<style>
</style>
