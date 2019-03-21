<template>
	<button type="del" @click="goOnPageDelete">Delete user</button>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goOnPageDelete() {
      this.$router.push("/WorkSpace/Delete");
    }
  }
};
</script>