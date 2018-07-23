<template>
        <div id="content_col">
            <ContainerTime></ContainerTime>
          	<h2>{{title}}</h2>
            <HistoryTime></HistoryTime>
        </div>
</template>

<script>
	import ContainerTime from '../container/ContainerTime.vue'
	import HistoryTime from '../wrapper/HistoryTime.vue'

	export default {
		data() {
			return {
				title : "Work Time"
			}
		},
		components: {
			ContainerTime,
			HistoryTime
		}
	}
</script>

<style src="../../styles/time.css"></style>