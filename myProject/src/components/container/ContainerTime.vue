<template>
<div>
        <div class="now__date">
            <p>{{date}}</p> 
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
      date: getDate()
    }
  },
  created() {
    bus.$on("takeTimetable", data => {
      this.ID = data.id;
      this.startLunch = data.StartLunch || "";
      this.endLunch = data.EndLunch || "";
    });
  },
  methods: {
    changeTimeTable(e) {
      let parameter = e.target.getAttribute("id");
      const time = getValueOfParam(parameter, getTime(), this.startLunch, this.endLunch);
      if (parameter.indexOf("Lunch") > -1) parameter = "Lunch";
      const xhr = request("PUT",`${this.$root.URL}/api/timetables/${this.ID}`, `${parameter}=${time}`);
      xhr.onload = () => {
          if (xhr.status === 200) {
              if (parameter === 'Lunch') {
                 [this.startLunch, this.endLunch] = time.split('@');
              }
              bus.$emit('updateTimetable');
            }
      }
    }
  }
};
</script>

<style></style>