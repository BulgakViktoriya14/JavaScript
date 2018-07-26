<template>
	<button type="users" @click="getListUsers">Users:</button>
</template>
<script>
import request from "../../request.js";
export default {
  data() {
    return {};
  },
  methods: {
    getListUsers() {
      const xhr = request("GET", `${this.$root.URL}/api/users`);
      xhr.onload = function() {
        let divUsers = document.getElementById("users_name");
        while (divUsers.firstChild) divUsers.removeChild(divUsers.firstChild);
        this.listUsers = JSON.parse(xhr.responseText);
        for (let us of this.listUsers) {
          let span = document.createElement("span");
          span.innerHTML = `<p userID=${us.id}>${us.Name}</p>`;
          divUsers.appendChild(span);
        }
      };
    }
  }
};
</script>   