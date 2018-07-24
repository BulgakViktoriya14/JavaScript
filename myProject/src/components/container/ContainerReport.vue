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
	import ReportText from '../textarea/ReportText.vue';
	import ReportNote from '../textarea/ReportNote.vue';
	import { bus } from '../../eventBus.js';
	export default {
		data() {
			const date = new Date();
			return {
				date: `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`,
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
				xhr.send(`Date=26-07-2018&MainText=${this.textReport}&Note=${this.noteReport}`);
				bus.$emit("updateReport");
			}
		}
	}
</script>

<style>
</style>