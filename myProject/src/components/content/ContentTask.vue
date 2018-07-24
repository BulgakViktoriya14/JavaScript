<template>
       <div id="content_col">
            <ContainerTask></ContainerTask>
          	<h2>{{title}}</h2>
            <OldTasks></OldTasks>
        </div>
</template>

<script>
	import ContainerTask from '../container/ContainerTask.vue';
	import OldTasks from '../wrapper/OldTasks.vue';
	import { bus } from '../../eventBus.js';
	
	export default {
		data() {
			return {
				title : "Work Tasks"
			}
		},
		components: {
			ContainerTask,
			OldTasks,
		},
		created () {
		}
	}
</script>

<style src="../../styles/task.css"></style>