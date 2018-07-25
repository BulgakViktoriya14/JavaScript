<template>
    <div class="old_reports" id="old_reports">
        <div class='raw__list'>
        <div class="raw" v-for="item of items" :key="item.id">
            <p class="raw__date">{{item.Date}}</p>
            <div class="raw__report">
                    <div class="raw__report-text"><h1>Report</h1><p>{{item.MainText}}</p></div>
                    <div class="raw__report-note"><h1>Notes</h1><p>{{item.Note}}</p></div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { bus } from "../../eventBus";
import request from "../../request";
import { getDate } from "../../helpers/date";
export default {
  data() {
    return {
        items: [],
      date: getDate()
    };
  },
  methods: {},
  created() {
    bus.$on("load", (arr) => {
        this.items = arr;      
    }),
      bus.$on("updateReport", () => {
        const xhr = request("GET", `${this.$root.URL}/api/reports`);
        xhr.onload = function() {
          this.items = JSON.parse(xhr.responseText);
        };
      });
  }
};
</script>

<style>
</style>