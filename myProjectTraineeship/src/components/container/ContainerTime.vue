<template>
  <div class="container" v-if="flagTime">
        <div class="now__date">
            <p>{{date}}</p> 
            <button @click="createTimetable">Create today</button>
        </div>
        <div class="time_buttons" @click="changeTimeTable" >
            <button id="In">Has come</button>
            <button id="startLunch">Start lunch</button>
            <button id="endLunch">End lunch</button>
            <button id="Out">Gone</button>
        </div>
  </div>
</template>

<script>
import request from "../../request";
import { bus } from "../../eventBus";
import { getDate, getTime } from "../../helpers/date";
import swal from 'sweetalert2';

function getValueOfParam(param, time, startLunch, endLunch) {
  const map = {
    In: time,
    Out: time,
    startLunch: `${time}@${endLunch}`,
    endLunch: `${startLunch}@${time}`
  };
  return map[param];
}
export default {
  data() {
    return {
      ID: null,
      startLunch: null,
      endLunch: null,
      date: getDate(),
      flagTime: false
    };
  },
  created() {
    bus.$on("takeTimetable", data => {
      this.ID = data.id;
      this.startLunch = data.StartLunch || "";
      this.endLunch = data.EndLunch || "";
    });
    const role = localStorage.getItem("role");
    if (role === "admin" || role === "helper") this.flagTime = true;
  },
  methods: {
    changeTimeTable(e) {
      let parameter = e.target.getAttribute("id");
      const time = getValueOfParam(parameter, getTime(), this.startLunch, this.endLunch);
      if (parameter.indexOf("Lunch") > -1) parameter = "Lunch";
      const xhr = request("PUT", `${this.$root.URL}/api/timetables/${this.ID}`, `${parameter}=${time}`);
      xhr.onload = () => {
        if (xhr.status === 200) {
          if (parameter === "Lunch") {
            [this.startLunch, this.endLunch] = time.split("@");
          }
          bus.$emit("updateTimetable");
        }
      };
    },
    createTimetable() {
      let URL = `${this.$root.URL}/api/timetables`;
      const {login} = this.$route.params;
      if (login) URL += `?login=${login}`;
      const xhr = request('POST', URL, `Date=${getDate()}`);
      xhr.onload = () => {
        if (xhr.status === 201)  {
          bus.$emit('updateTimetable');
        }
        else swal('Oooops', 'You have a timetable on this day', 'error');
      }
    }
  }
};
</script>

<style></style>