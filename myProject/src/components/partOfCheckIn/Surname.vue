<template>
	 <div class="registration" name="sur_name">
        <p>Surname</p>
        <input type="text" @change="surnameChange">
    </div>
</template>

<script>
import {bus} from '../../eventBus';
	
	export default {
	data() {
		return {
			valSurname:''
		}
	},
	methods : {
		surnameChange(e) {
			bus.$emit('surnameChange', e.target.value);
		}
	}
}
</script>

<style>
</style>
