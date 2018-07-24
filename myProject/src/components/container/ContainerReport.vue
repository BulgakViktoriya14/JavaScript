<template>
	<div class="container">
        <div class="report__date">
            <p>{{date}}</p>      
        </div>
        <div class="report__inputs">
            <ReportText @addTextReport="textReport=$event"></ReportText>
           	<div class="more_text"></div> 
           	<div class="border"></div>
            <ReportNote @addNoteReport="noteReport=$event"></ReportNote>
        </div>
        <input class="report__accept" type="submit" id="send" @click="addReport">
   </div>
</template>

<script>
import ReportText from "../textarea/ReportText.vue";
import ReportNote from "../textarea/ReportNote.vue";
import { bus } from "../../eventBus.js";
import { getDate } from "../../helpers/date";
import request from "../../request";
export default {
  data() {
    return {
      date: getDate(),
      textReport: "",
      noteReport: ""
    };
  },
  components: {
    ReportText,
    ReportNote
  },
  methods: {
    addReport(valText) {
      const xhr = request(
        "POST",
        `${this.$root.URL}/api/reports`,
        `Date=26-07-2018&MainText=${this.textReport}&Note=${this.noteReport}`
      );
      bus.$emit("updateReport");
    }
  }
};
</script>

<style>
</style>