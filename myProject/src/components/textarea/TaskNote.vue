<template>
	<textarea type="text" name="task_note" @input="writeTaskNote"></textarea>
</template>

<script>
export default {
  data() {
    return {
      valTaskNote: ""
    };
  },
  methods: {
    writeTaskNote(event) {
      this.valTaskNote = event.target.value;
      this.$emit("addNoteForTask", this.valTaskNote);
    }
  }
};
</script>
	
<style>
</style>
