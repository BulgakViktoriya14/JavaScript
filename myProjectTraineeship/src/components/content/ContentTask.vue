<template>
       <div id="content_col">
            <ContainerTask></ContainerTask>
          	<h2>{{title}}</h2>
            <OldTasks></OldTasks>
        </div>
</template>

<script>
import ContainerTask from "../container/ContainerTask.vue";
import OldTasks from "../wrapper/OldTasks.vue";
import setData from '../../helpers/data';
import bus from '../../eventBus';
export default {
  data() {
    return {
      title: "Work Tasks"
    };
  },
  components: {
    ContainerTask,
    OldTasks
  },
  beforeCreate() {
    const login = localStorage.getItem("login");
    const role = localStorage.getItem("role");
    if (
      role === "user" &&
      login !== this.$route.params.login &&
      window.location.pathname !== "/WorkSpace/tasks"
    )
      this.$router.push("/WorkSpace/NotFound");
  },
  created() {
	  const {login} = this.$route.params;
	  setData('tasks', this.$root.URL, login);
	  setData('users', this.$root.URL);
  }
};
</script>

<style src="../../styles/task.css"></style>