<template>
	<button type="logOut" @click="LogOut">Log out</button>
</template>
<script>
import request from "../../request";
export default {
  data() {
    return {};
  },
  methods: {
    LogOut() {
      const xhr = request("POST", `${this.$root.URL}/logout`, null);
      xhr.onload = () => {
		if (xhr.status === 200) {
			localStorage.clear();
			this.$router.push("/SignIn");
		}
      };
    }
  }
};
</script>