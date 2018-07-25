<template>
	<div class="old_reports">
        <div class="raw__list" @click="clickOnRecord">
            <div class="raw" v-for="item of items" :key="item.id">
                <input type="hidden" :value="item.id"/>
                <p class="raw__date">{{item.Date}}</p>
                <div class="raw__time">
                    <div class="raw_coming times">
                        <div class="time_header">
                            <p>Has come</p>
                        </div>
                        <p class="raw__time-text">{{item.In}}</p>
                    </div>
                    <div class="raw_dinner_in times">
                        <div class="time_header">
                           <p>Early lunch</p>
                        </div>
                        <p class="raw__time-text">{{item.StartLunch}}</p>
                    </div>
                    <div class="raw_dinner_out times" >
                        <div class="time_header">
                            <p>End of lunch</p>
                        </div>
                        <p class="raw__time-text">{{item.EndLunch}}</p>
                    </div>
                    <div class="raw_out times">
                        <div class="time_header">
                            <p>Gone</p>
                        </div>
                        <p class="raw__time-text">{{item.Out}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import request from "../../request";
import { bus } from "../../eventBus";
function getCurrentTimetableID(element) {
  while (element.parentNode.getAttribute("class") != "raw")
    element = element.parentNode;
  const root = element.parentNode;
  return root.children[0].getAttribute("value");
}

export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    const xhr = request("GET", `${this.$root.URL}/api/timetables`, null);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const timetables = JSON.parse(xhr.responseText);
        for (let timetable of timetables) {
          let [startLunch, endLunch] = [null, null];
          if (timetable.Lunch) [startLunch, endLunch] = timetable.Lunch.split("@");
          timetable.StartLunch = startLunch;
          timetable.EndLunch = endLunch;
        }
        this.items = timetables;
      }
    };
  },
  methods: {
    clickOnRecord(e) {
      const id = getCurrentTimetableID(e.target);
      const timetable = this.items.find(elem => elem.id == id);
      bus.$emit("takeTimetable", timetable);
    }
  }
};
</script>

<style>
</style>
