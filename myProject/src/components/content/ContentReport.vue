<template>
    <div id="content_col">
    	<ContainerReport></ContainerReport>
	    <h2>{{title}}</h2>
        <OldReports></OldReports>
    </div>
</template>

<script>
import OldReports from "../wrapper/OldReports.vue";
import ContainerReport from "../container/ContainerReport.vue";
import setData from '../../helpers/data';
export default {
  data() {
    return {
      title: "Work Reports"
    };
  },
  components: {
    OldReports,
    ContainerReport
  },
  created() {
	  const {login} = this.$route.params;
	  setData("reports", this.$root.URL, login);
  },
  methods: {}
};
</script>

<style src="../../styles/report.css"></style>