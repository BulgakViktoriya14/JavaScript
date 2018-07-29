<template>
    <div>
        <div class="person">
            <img class="avatar" src="../../img/avatar.jpg">
        </div>
        <div class="right_part">
            <div class="right_contains">
                <div class="name">
                    <h1>{{name}}</h1>
                    <p>{{email}}</p>
                </div>
                <div class="log_out">
                    <LogOut></LogOut>
                </div>
            </div>
            <div class="admin_view">
                <div class="text">
                    <p>View:</p>
                </div>
                <div class="buttons">
                    <ul class="admin_buttons">
                        <ButTime :login=login></ButTime>
                        <ButRep :login=login></ButRep>
                        <butTasks :login=login></butTasks>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButTime from "../buttons/butTime.vue";
import ButRep from "../buttons/butRep.vue";
import ButTasks from "../buttons/butTasks.vue";
import LogOut from "../buttons/logOut.vue";
import request from "../../request";

export default {
  data() {
    return {
      name: "",
      login: "",
      role: "",
      id: "",
      email : ""
    };
  },
  components: {
    ButTime,
    ButRep,
    ButTasks,
    LogOut
  },
  methods: {},
  created() {
    const {login} = this.$route.params;
    const xhr = request("GET", `${this.$root.URL}/api/users/${login}`);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const user = JSON.parse(xhr.responseText);
        this.login = user.Login;
        this.name = user.Name;
        this.role = user.Role;
        this.email = user.Email;
      }
    };
  }
};
</script>

<style src="../../styles/cabinet.css"></style>