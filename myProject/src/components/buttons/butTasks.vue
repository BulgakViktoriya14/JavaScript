<template>
	<li class="buttons tasks" @click="goOnPageTasks">
       <a href="">Tasks</a>
    </li>
</template>
<script>
	export default {
	    data() {
	      return {
	         
	      }
	    },
	    methods: {
	    	goOnPageTasks() {
	    		 this.$router.push("/WorkSpace/Tasks");
	    	}
	    }
    }
</script>