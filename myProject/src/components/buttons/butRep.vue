<template>
	<li class="buttons reports" @click="goOnPageReports">
        <a href="/WorkSpace/Reports">Reports</a>
    </li>
</template>
<script>
	export default {
	    data() {
	      return {
	         
	      }
	    },
	    methods: {
	    	goOnPageReports() {
	    		 window.location.href = "/WorkSpace/Reports";
	    	}
	    }
    }
</script>