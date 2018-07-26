<template>
<div class="registration" name="type">
    <p>Choose user type</p>
    <div class="select">
        <select @change="roleChange">
            <option value="admin">Admin</option>
            <option value="helper">Helper</option>
            <option selected value="user">User</option>
        </select>
    </div>
</div>
</template>
<script>
import { bus } from "../../eventBus";
export default {
  data() {},
  methods: {
    roleChange(e) {
      bus.$emit("roleChange", e.target.value);
    }
  }
};
</script>