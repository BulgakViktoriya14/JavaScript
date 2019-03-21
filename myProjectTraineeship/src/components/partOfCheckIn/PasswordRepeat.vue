<template>
	<div class="registration" name="repassword" @change="passwordRepeatChange">
		        <p>Repeate password</p>
				<input type="password">
	</div>
</template>

<script>
import { bus } from "../../eventBus";

export default {
  data() {},
  methods: {
    passwordRepeatChange(e) {
      bus.$emit("passwordRepeatChange", e.target.value);
      this.$emit("getPasswRep",e.target.value);
    }
  }
};
</script>