<template>
	<div class="container" v-if="flagReport">
        <div class="report__date">
            <p>{{date}}</p>      
        </div>
        <div class="report__inputs">
            <ReportText @addTextReport="textReport=$event"></ReportText>
           	<div class="more_text"></div> 
           	<div class="border"></div>
            <ReportNote @addNoteReport="noteReport=$event"></ReportNote>
        </div>
        <input class="report__accept" type="submit"  id="send" @click="addReport">
   </div>
</template>

<script>
import ReportText from "../textarea/ReportText.vue";
import ReportNote from "../textarea/ReportNote.vue";
import { bus } from "../../eventBus.js";
import { getDate } from "../../helpers/date";
import request from "../../request";
import swal from "sweetalert2";

const mapOnStatus = {
  201: Ok,
  500: BadRequest
};
function Ok() {
  bus.$emit("updateReport");
}
function BadRequest() {
  swal("Ooops...", "You have a report on this day", "error");
}
export default {
  data() {
    return {
      date: getDate(),
      textReport: "",
      noteReport: "",
      flagReport: true
    };
  },
  components: {
    ReportText,
    ReportNote
  },
  methods: {
    addReport(valText) {
      const xhr = request("POST", `${this.$root.URL}/api/reports`, `Date=${this.date}&MainText=${this.textReport}&Note=${this.noteReport}`);
      xhr.onload = () => mapOnStatus[xhr.status]();
    }
  },
  created() {
	const login = localStorage.getItem('login');
	this.flagReport = login === this.$route.params.login || window.location.pathname === '/WorkSpace/reports';
  }
};
</script>

<style>
</style>