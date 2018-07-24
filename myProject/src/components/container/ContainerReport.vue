<template>
	<div class="container">
        <div class="report__date">
            <p>{{date}}</p>      
        </div>
        <div class="report__inputs">
            <ReportText @addTextReport="textReport=$event"></ReportText>
           	<div class="more_text"></div>
            <ReportNote @addNoteReport="noteReport=$event"></ReportNote>
        </div>
        <input class="report__accept" type="submit" id="send" @click="addReport">
   </div>
</template>

<script>
	import ReportText from '../textarea/ReportText.vue';
	import ReportNote from '../textarea/ReportNote.vue';
	import { bus } from '../../eventBus.js';
	export default {
		data() {
			const date = new Date();
			return {
				date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
				textReport: '',
				noteReport: '',
			}
		},
		components: {
			ReportText,
			ReportNote,
		},
		methods: {
			addReport(valText) {
				const xhr = new XMLHttpRequest();
				xhr.open('POST', `${this.$root.URL}/api/reports`);
				xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
				xhr.withCredentials = true; 
				xhr.send(`Date=12-06-2018&MainText=${this.textReport}&Note=${this.noteReport}`);
				xhr.onload=function() {
					const newReport = JSON.parse(xhr.responseText);
					console.log(xhr.responseText);
					bus.$emit("updateReport", newReport);
				}
			}
		}
	}
</script>

<style>
</style>