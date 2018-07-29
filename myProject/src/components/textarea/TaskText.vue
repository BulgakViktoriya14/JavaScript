<template>
	 <textarea type="text" name="task_text" @input="writeTaskText"></textarea>
</template>

<script>
export default {
  data() {
    return {
      valTaskText: ""
    };
  },
  methods: {
    writeTaskText(event) {
      this.valTaskText = event.target.value;
      this.$emit("addTextForTask", this.valTaskText);
    }
  }
};
</script>

<style>
</style>
