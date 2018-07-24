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
	    		 window.location.href = "/WorkSpace/Tasks";
	    	}
	    }
    }
</script>