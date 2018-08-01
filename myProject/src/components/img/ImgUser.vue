<template>
	<img src="../../img/User.png" alt="user_name" @click="goOnPageUser">
</template>

<script>
import redirect from "../../helpers/redirect";
export default {
  data() {
    return {};
  },
  methods: {
    goOnPageUser() {
      redirect(this.$router);
    }
  }
};
</script>

<style>
</style>
