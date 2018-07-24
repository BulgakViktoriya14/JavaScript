<template>
    <div id="content_col">
    	<ContainerReport></ContainerReport>
	    <h2>{{title}}</h2>
        <OldReports></OldReports>
    </div>
</template>

<script>

	import OldReports from '../wrapper/OldReports.vue';
	import ContainerReport from '../container/ContainerReport.vue';
	
	export default {
		data() {
			return {
				title : "Work Reports",
			}
		},
		components: {
			OldReports,
			ContainerReport
		},
		methods: {
			
		}
	}
</script>

<style src="../../styles/report.css"></style>