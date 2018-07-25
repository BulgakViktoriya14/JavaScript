<template>
	<div class="registration" name="email">
        <p>Your E-mail</p>
        <input type="email" @change="emailChange">
    </div>
</template>

<script>
import {bus} from '../../eventBus';
	export default {
	data() {
		return {
			valEmail:""
		}
	},
	methods : {
		emailChange(e) {
			bus.$emit('emailChange', e.target.value);
		}
	}
}
</script>

<style>
</style>
