<template>
	<button type="add" @click="goOnPageAdd">Add new user</button>
</template>
<script>
	export default {
	    data() {
	      return {
	         
	      }
	    },
	    methods: {
	    	goOnPageAdd() {
	    		 window.location.href = "/WorkSpace/CheckIn";
	    	}
	    }
    }
</script>