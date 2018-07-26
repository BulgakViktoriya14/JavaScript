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
  methods: {
    goOnPageTime() {
      this.$router.push("/WorkSpace/WorkTime");
    }
  }
};
</script>