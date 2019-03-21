<template>
	<div class="old_tasks">
        <div class="raw__list">
            <div class="raw" v-for="task of tasks" :key="task.id">
                    <div class="raw__task">
                        <div class="raw__task-user">
                            <h1>User</h1>
                            <p v-for="us of task.Users" :key="us">{{us}}</p>
                        </div>
                        <div class="raw__task-time">
                            <h1>Time</h1>
                            <p>{{task.Period}}</p>
                        </div>
                        <div class="raw__task-text">
                            <h1>Task</h1>
                            <p>{{task.Description}}</p>
                        </div> 
                        <div class="raw__task-note">
                            <h1>Notes</h1>
                            <p>{{task.Note}}</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bus } from "../../eventBus";
import getData from '../../helpers/data';
export default {
  data() {
    return {
      tasks: []
    };
  },
  created() {
    bus.$on("loadTasks", arr => {
      this.tasks = arr;
    });
    bus.$on("updateTasks", () => {
        const {login} = this.$route.params;
      getData('tasks', this.$root.URL, login);
    });
  }
};
</script>

<style>
</style>
