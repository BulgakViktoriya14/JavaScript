<template>
	<div class="container">
        <div class="task__date">
            <p>{{date}}</p>         
        </div>
        <div class="task__inputs">
        	<TaskUser></TaskUser>
        	<div class="border"></div>
        	<TaskTime></TaskTime>
        	<div class="border"></div>
            <TaskText></TaskText>
           	<div class="border"></div>
            <TaskNote></TaskNote>
        </div>
       <input class="task__accept" type="submit" id="send">
   </div>
</template>

<script>
	import TaskText from '../textarea/TaskText.vue';
	import TaskNote from '../textarea/TaskNote.vue';
	import TaskUser from '../textarea/TaskUser.vue';
	import TaskTime from '../textarea/TaskTime.vue'

	export default {
		data() {
			const date = new Date();
			return {
				date:`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`,
			}
		},
		components: {
			TaskText,
			TaskNote,
			TaskUser,
			TaskTime
		}
	}
</script>

<style>
</style>