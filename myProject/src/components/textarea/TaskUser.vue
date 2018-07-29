<template>
	 <div class="users_task">
         <select class="type-search" multiple size="3" type="text" @click="chooseUsersForTask" id="type-search">
                <option value="user1">User1</option>
                <option value="user2">User2</option>
                <option value="helper1">User3</option>
                <option value="log4">User4</option>
                <option value="log5">User5</option>
                <option value="log6">User6</option>
        </select>
       </div>
</template>

<script>
	export default {
	data() {
		return {
            valUsers: new Set()
		}
	}, 
    methods: {
        chooseUsersForTask(event) {
            let curPerson = event.target;
			this.valUsers.add(curPerson.value);
            this.$emit("addUsersForTask", Array.from(this.valUsers));
        }
    }
}
</script>

<style>
</style>
