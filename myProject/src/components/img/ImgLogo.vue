<template>
	<a href="" class="logo"><img src="../../img/logo.png" @click="goOnPageUser"></a>
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
