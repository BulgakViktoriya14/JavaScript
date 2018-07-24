<template>
	<li class="buttons time" @click="goOnPageTime">
        <a href="">Work Time</a>
     </li>
</template>
<script>
	export default {
	    data() {
	      return {
	         
	      }
	    },
	    methods: {
	    	goOnPageTime() {
	    		 window.location.href = "/WorkSpace/WorkTime";
	    	}
	    }
    }
</script>