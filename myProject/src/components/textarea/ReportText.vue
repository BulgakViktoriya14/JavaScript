<template>
	<textarea type="text" name="report_text" @input="changeReportText"></textarea>
</template>

<script>
	export default {
	data() {
		return {
			valText:''
		}
	},
	methods:{
		changeReportText(event) {
			this.valText = event.target.value;
			this.$emit('addTextReport',this.valText);
		}
	}
}
</script>

<style>
</style>
