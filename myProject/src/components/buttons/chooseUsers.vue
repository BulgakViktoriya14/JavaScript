<template>
	<button type="users" @click="getListUsers">Users:</button>
</template>
<script>
import getData from '../../helpers/data';
export default {
  data() {
    return {};
  },
  methods: {
    getListUsers() {
      getData('users', this.$root.URL);
    }
  }
};
</script>   
