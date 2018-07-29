<template>
	<li class="buttons tasks" @click="goOnPageTasks">
       <a href="">Tasks</a>
    </li>
</template>
<script>
	export default {
  data() {
    return {};
  },
  props: ["login"],
  methods: {
    goOnPageTasks() {
      this.$router.push(`/WorkSpace/users/${this.login}/tasks`);
    }
  }
};
</script>