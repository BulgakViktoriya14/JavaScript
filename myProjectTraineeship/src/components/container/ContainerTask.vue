<template>
	<div class="container" v-if="flagTask">
        <div class="task__date">
            <p>{{date}}</p>          
        </div>
        <div class="task__inputs">
        	<TaskUser @addUsersForTask="usersTask=$event"></TaskUser>
        	<div class="border"></div>
        	<TaskTime @addTimeForTask="period=$event"></TaskTime>
        	<div class="border"></div>
            <TaskText @addTextForTask="textTask=$event"></TaskText>
           	<div class="border"></div>
            <TaskNote @addNoteForTask="noteTask=$event"></TaskNote>
        </div>
       <input class="task__accept" type="submit" id="send" @click="addTask"> 
   </div>
</template>

<script>
import TaskText from "../textarea/TaskText.vue";
import TaskNote from "../textarea/TaskNote.vue";
import TaskUser from "../textarea/TaskUser.vue";
import TaskTime from "../textarea/TaskTime.vue";
import { getDate } from "../../helpers/date";
import swal from "sweetalert2";
import { bus } from "../../eventBus";
import request from "../../request";

const mapOnStatus = {
  201: Ok,
  500: BadRequest
};
function Ok() {
  bus.$emit("updateTasks");
}
function BadRequest() {
  swal("Ooops...", "You are not an administrator", "error");
}

export default {
  data() {
    return {
      date: getDate(),
      usersTask: [],
      period: "",
      textTask: "",
      noteTask: "",
      flagTask: false
    };
  },
  components: {
    TaskText,
    TaskNote,
    TaskUser,
    TaskTime
  },
  methods: {
    addTask() {
      console.log(this.usersTask, this.period, this.textTask, this.noteTask);
	  const xhr = request("POST", `${this.$root.URL}/api/tasks`,
	  	`Date=${this.date}&Users=${JSON.stringify(this.usersTask)}&Period=${this.period}&Description=${this.textTask}&Note=${this.noteTask}`);
      xhr.onload = () => mapOnStatus[xhr.status]();
    }
  },
  created() {
	  this.flagTask = localStorage.getItem('role') === 'admin' && (localStorage.getItem('login') === this.$route.params.login || window.location.pathname === '/WorkSpace/tasks');
  }
};
</script>

<style>
</style>