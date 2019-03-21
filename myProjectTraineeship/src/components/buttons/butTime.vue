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
      this.$router.push(`/WorkSpace/users/${this.login}/worktimes`);
    }
  }
};
</script>