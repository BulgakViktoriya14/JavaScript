<template>
	<div class="registration" name="first_name">
        <p>Name</p>
        <input type="text" @change="nameChange">
    </div>
</template>

<script>
import { bus } from "../../eventBus";

export default {
  data() {},
  methods: {
    nameChange(e) {
      bus.$emit("nameChange", e.target.value);
    }
  }
};
</script>

<style>
</style>
