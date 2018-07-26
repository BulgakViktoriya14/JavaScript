<template>
	<div class="registration" name="login">
        <p>Login</p>
        <input type="text" @change="loginChange">
    </div>
</template>

<script>
import { bus } from "../../eventBus";

export default {
  data() {},
  methods: {
    loginChange(e) {
      bus.$emit("loginChange", e.target.value);
    }
  }
};
</script>

<style>
</style>
