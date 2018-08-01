<template>
	 <div class="users_task">
         <select class="type-search" multiple size="3" type="text" @click="chooseUsersForTask" id="type-search">
               <option v-for="user of users" :value="user.Login" :key="user.id">{{user.Name}}</option>
        </select>
       </div>
</template>

<script>
import {bus} from '../../eventBus';
export default {
  data() {
    return {
      users: [],
      valUsers: new Set()
    };
  },
  methods: {
    chooseUsersForTask(event) {
      let curPerson = event.target;
      this.valUsers.add(curPerson.value);
      this.$emit("addUsersForTask", Array.from(this.valUsers));
    }
  },
  created() {
    bus.$on("loadUsers", array => {
      this.users = array;
    });
  }
};
</script>

<style>
</style>
