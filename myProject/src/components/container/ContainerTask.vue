<template>
	<div class="container">
        <div class="task__date">
            <p>{{date}}</p>         
        </div>
        <div class="task__inputs">
            <TaskText></TaskText>
           	<div class="more_text"></div>
            <TaskNote></TaskNote>
        </div>
       <input class="task__accept" type="submit" id="send">
   </div>
</template>

<script>
	import TaskText from '../textarea/TaskText.vue';
	import TaskNote from '../textarea/TaskNote.vue';

	export default {
		data() {
			const date = new Date();
			return {
				date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
			}
		},
		components: {
			TaskText,
			TaskNote
		}
	}
</script>

<style>
</style>