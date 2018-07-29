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
  created() {
	  const {login} = this.$route.params;
	  setData("tasks", this.$root.URL, login);
  }
};
</script>

<style src="../../styles/task.css"></style>