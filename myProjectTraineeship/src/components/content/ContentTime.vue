<template>
        <div id="content_col">
            <ContainerTime></ContainerTime>
          	<h2>{{title}}</h2>
            <HistoryTime></HistoryTime>
        </div>
</template>

<script>
import ContainerTime from "../container/ContainerTime.vue";
import HistoryTime from "../wrapper/HistoryTime.vue";
import setData from "../../helpers/data";
export default {
  data() {
    return {
      title: "Work Time"
    };
  },
  components: {
    ContainerTime,
    HistoryTime
  },
  beforeCreate() {
    const login = localStorage.getItem("login");
	const role = localStorage.getItem("role");
	debugger;
    if (
      role === "user" &&
      login !== this.$route.params.login &&
      window.location.pathname !== "/WorkSpace/worktimes"
    )
      this.$router.push("/WorkSpace/NotFound");
  },
  created() {
	const {login} = this.$route.params;
	setData("timetables", this.$root.URL, login);
  }
};
</script>

<style src="../../styles/time.css"></style>