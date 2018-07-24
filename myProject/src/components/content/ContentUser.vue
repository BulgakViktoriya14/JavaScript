<template>
    <div>
        <div class="person">
            <img class="avatar" src="../../img/avatar.jpg">
        </div>
        <div class="right_part">
            <div class="name">
                <h1>Name</h1>
            </div>
            <div class="admin_view">
                <div class="text">
                    <p>View:</p>
                </div>
                <div class="buttons">
                    <ul class="admin_buttons">
                        <ButTime></ButTime>
                        <ButRep></ButRep>
                        <butTasks></butTasks>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import ButTime from '../buttons/butTime.vue'
    import ButRep from '../buttons/butRep.vue'
    import ButTasks from '../buttons/butTasks.vue'

	export default {
		data() {
			return {
			}
		},
		components: {
			ButTime,
            ButRep,
            ButTasks
		},
        methods: {
            
        }
	}
</script>

<style src="../../styles/cabinet.css"></style>