<template>
	<li class="buttons reports" @click="goOnPageReports">
        <a href="">Reports</a>    </li>
</template>
<script>
	export default {
	    data() {
	      return {
	         
	      }
	    },
	    methods: {
	    	goOnPageReports() {
	    		this.$router.push("/WorkSpace/Reports");
	    	}
	    }
    }
</script>