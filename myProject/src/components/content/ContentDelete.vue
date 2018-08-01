<template>
    <div class="delete">  
         <div class="find">
            <p>Login</p>
            <input type="text" @input="findUser">
          </div>
        <p class="found">{{statusSearch ? "User found" : "User not found"}}</p>
        <div class="del_buttons">
            <button type="delete" :disabled="!statusSearch" @click="deleteUser">Delete</button>
            <button type="cancel" @click="goOnPageAdmin">Cancel</button>
        </div>
    </div>  
</template>

<script>
import request from "../../request";
export default {
  data() {
    return {
      person: "",
      statusSearch: false
    };
  },
  methods: {
    findUser(event) {
      if (event.target.value) {
        this.person = event.target.value;
        const xhr = request("GET", `${this.$root.URL}/api/users/${this.person}`);
        xhr.onload = () => (this.statusSearch = xhr.status === 200);
      } else this.statusSearch = false;
    },
    deleteUser() {
        const xhr = request("DELETE",`${this.$root.URL}/api/users?login=${this.person}`);
        xhr.onload = () => {
          if (xhr.status === 200) this.$router.push("/WorkSpace/Admin");
        };
    },
    goOnPageAdmin() {
      this.$router.push("/WorkSpace/Admin");
    }
  }
};
</script>

<style src="../../styles/delete.css"></style>