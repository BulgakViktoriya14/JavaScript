<template>
	<li class="buttons reports" @click="goOnPageReports">
        <a href="">Reports</a>    </li>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["login"],
  methods: {
    goOnPageReports() {
      this.$router.push(`/WorkSpace/users/${this.login}/reports`);
    }
  }
};
</script>