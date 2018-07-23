<template>
	<div class="old_reports" id="old_reports">
   	</div>
</template>

<script>
    import { bus } from '../../eventBus.js';

	export default {
	data() {
		return {
            date: new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear(),
		}
	},
    methods: {
        
    },
    created () {
        bus.$on("load",function(arr) {
            this.$root.reports = arr;
            console.log(this.$root.reports);
            var div = document.getElementById("old_reports");
            div.innerHTML = '';
            for(var report of this.$root.reports) {
                var divRawList = document.createElement("div");
                    divRawList.setAttribute("class","raw__list");
                    divRawList.innerHTML = `<div class="raw">
                        <p class="raw__date">${report.Date}</p>
                        <div class="raw__report">
                            <p class="raw__report-text">${report.MainText}</p>
                            <p class="raw__report-note">${report.Note}</p>
                        </div>
                    </div>`
            div.appendChild(divRawList);
            }
        }),
        bus.$on("updateReport", function(obj) {
            this.$root.reports.unshift(obj);
            console.log(this.$root.reports);
            var div = document.getElementById("old_reports");
            div.innerHTML = '';
            for(var report of this.$root.reports) {
                var divRawList = document.createElement("div");
                    divRawList.setAttribute("class","raw__list");
                    divRawList.innerHTML = `<div class="raw">
                        <p class="raw__date">${report.Date}</p>
                        <div class="raw__report">
                            <p class="raw__report-text">${report.MainText}</p>
                            <p class="raw__report-note">${report.Note}</p>
                        </div>
                    </div>`
            div.appendChild(divRawList);
            }
        })
   }
}
</script>

<style>
</style>
