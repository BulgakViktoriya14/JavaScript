<template>
       <div id="content_col">
            <ContainerTask v-if="flag"></ContainerTask>
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
				title : "Work Task",
				flag: ''
			}
		},
		components: {
			ContainerTask,
			OldTasks,
		},
		created () {
			bus.$on('doFlag', function(fl) {
				this.flag = fl;
				console.log(this.flag);
			})
		}
	}
</script>

<style src="../../styles/task.css"></style>