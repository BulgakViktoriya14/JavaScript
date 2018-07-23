<template>
	<textarea type="text" name="report_note" @input="changeReportNote"></textarea>
</template>

<script>
	export default {
	data() {
		return {
			valNote:''
		}
	},
	methods:{
		changeReportNote(event) {
			this.valNote = event.target.value;
			this.$emit('addNoteReport',this.valNote);
		}
	}
}
</script>

<style>
</style>
