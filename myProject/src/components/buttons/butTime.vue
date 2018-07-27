<template>
	<li class="buttons time" @click="goOnPageTime">
        <a href="">Work Time</a>
     </li>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["login"],
  methods: {
    goOnPageTime() {
			this.$store.commit('setLogin', this.login);
      this.$router.push("/WorkSpace/WorkTime");
    }
  }
};
</script>