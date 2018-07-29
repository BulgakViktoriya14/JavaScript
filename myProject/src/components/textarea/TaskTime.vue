<template>
	<input name="task_time" type="text" placeholder="04.07.2018-03.08.2018" @input="writeTimeForTask">
</template>

<script>
	export default {
	data() {
		return {
			valTaskTime:""
		}
	},
	methods: {
		writeTimeForTask(event) {
			this.valTaskTime = event.target.value;
			this.$emit("addTimeForTask",this.valTaskTime);
		}
	}
}
</script>

<style>
</style>
