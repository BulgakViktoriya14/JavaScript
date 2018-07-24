<template>
	<button type="del" @click="goOnPageDelete">Delete user</button>
</template>
<script>
	export default {
	    data() {
	      return {
	         
	      }
	    },
	    methods: {
	    	goOnPageDelete() {
	    		 window.location.href = "/WorkSpace/DeleteUser";
	    	}
	    }
    }
</script>