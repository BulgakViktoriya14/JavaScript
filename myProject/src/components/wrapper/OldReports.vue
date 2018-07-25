<template>
    <div class="old_reports" id="old_reports">
    </div>
</template>

<script>
import { bus } from "../../eventBus.js";
import request from "../../request.js";
import { getDate } from "../../helpers/date";
export default {
  data() {
    return {
      date: getDate()
    };
  },
  methods: {},
  created() {
    bus.$on("load", function(arr) {
      this.$root.reports = arr;
      console.log(this.$root.reports);
      const div = document.getElementById("old_reports");
      div.innerHTML = "";
      for (var report of this.$root.reports) {
        var divRawList = document.createElement("div");
        divRawList.setAttribute("class", "raw__list");
        divRawList.innerHTML = `<div class="raw">
                        <p class="raw__date">${report.Date}</p>
                        <div class="raw__report">
                            <div class="raw__report-text"><h1>Report</h1><p>${report.MainText}</p></div>
                            <div class="raw__report-note"><h1>Notes</h1>${report.Note}</p></div>
                        </div>
                    </div>`;
        div.appendChild(divRawList);
      }
    }),
      bus.$on("updateReport", function() {
        this.$root.reports = [];
        const xhr = request("GET", `${this.$root.URL}/api/reports`);
        xhr.onload = function() {
          this.$root.reports = JSON.parse(xhr.responseText);
          console.log(this.$root.reports);
          const div = document.getElementById("old_reports");
          div.innerHTML = "";
          for (let report of this.$root.reports) {
            const divRawList = document.createElement("div");
            divRawList.setAttribute("class", "raw__list");
            divRawList.innerHTML = `<div class="raw">
                            <p class="raw__date">${report.Date}</p>
                            <div class="raw__report">
                                <p class="raw__report-text">${report.MainText}</p>
                                <p class="raw__report-note">${report.Note}</p>
                            </div>
                        </div>`;
            div.appendChild(divRawList);
          }
        };
      });
  }
};
</script>

<style>
</style>