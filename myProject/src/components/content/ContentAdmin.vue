<template>
        <div id="content_col">
            <div class="person">
                <img class="avatar" src="../../img/avatar.jpg">
                <h1>{{this.name}}</h1>
                <h3>Administrator</h3>
			</div>
			<div class="users">
                <GetListUsers></GetListUsers>
            </div>
            <div class="names" id="users_name" @click="chooseUser">
                <span class="raw" v-for="user of listUsers" :key="user.id">
                    <p :userID=user.id :login=user.Login>{{user.Name}}</p>
                </span>
            </div>
            <div class="buttonsAdmin">
                <AddUser></AddUser>
                <DeleteUser></DeleteUser>
                <LogOut></LogOut>
            </div>
        </div>
</template>

<script>
import AddUser from "../buttons/addUser.vue";
import DeleteUser from "../buttons/deleteUser.vue";
import GetListUsers from "../buttons/chooseUsers.vue";
import { bus } from "../../eventBus";
import request from "../../request";
import LogOut from "../buttons/logOut.vue";

export default {
  data() {
    return {
      name: "",
      listUsers: []
    };
  },
  components: {
    AddUser,
    DeleteUser,
    GetListUsers,
    LogOut
  },
  beforeCreate() {
    if (localStorage.getItem("role") !== "admin")
      this.$router.push("/WorkSpace/NotFound");
  },
  created() {
    bus.$on("loadUsers", users => {
      this.listUsers = users;
    });
    this.name = localStorage.getItem("name");
  },
  methods: {
    chooseUser(e) {
      const currentUser = e.target;
      this.$store.commit("setName", currentUser.innerText);
      this.$store.commit("setId", currentUser.getAttribute("userID"));
      const login = currentUser.getAttribute("login");
      this.$router.push(`/WorkSpace/users/${login}`);
    }
  }
};
</script>

<style src="../../styles/admin.css"></style>