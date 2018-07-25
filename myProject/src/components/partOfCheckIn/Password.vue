<template>
	<div>
		<div class="registration" name="password">
		       <p>Password</p>
	           <input type="password">
	    </div>
		<div class="registration" name="repassword">
		        <p>Repeate password</p>
				<input type="password">
	    </div>
    </div>
</template>

<script>
	export default {
	data() {
		return {
			valPassw:'',
			valRepPassw:''
		}
	}
}
</script>

<style>
</style>
