<template>
    <div>
        <input type="checkbox" id="menu">
        <label for="menu" onclick>
            <ImgLogo></ImgLogo>
        </label>
        <div class="left">
            <aside class="menu off-canvas" id="menu_col">
                <img class="close_button" src="../../img/close.png">
                <a href="" class="logo"><img src="../../img/logo.png" ></a>
                <nav class="menu__nav">
                    <ul class="menu__list " @click="choosePage">
                        <li class="menu__item time">
                            <router-link tag="a" to="/WorkSpace/worktimes" id="timetables">Work Time</router-link>
                        </li>
                        <li class="menu__item reports">
                             <router-link tag="a" to="/WorkSpace/reports" id="reports">Reports</router-link>
                        </li>
                        <li class="menu__item tasks">
                            <router-link tag="a" to="/WorkSpace/tasks" id="tasks">Tasks</router-link>
                        </li>
                    </ul>
                </nav>
                <div class=menu_footer>
                    <a href="" class="user_image"  @click="goOnCabinet"><img  src="../../img/CUser.png"></a>
                     <h1>Personal cabinet</h1>
                 </div>
            </aside>
        </div>
    </div>
</template>

<script>
import ImgLogo from "../img/ImgLogo.vue";
import { bus } from "../../eventBus";
import setData from "../../helpers/data";
import redirect from "../../helpers/redirect";
export default {
  data() {
    return {};
  },
  components: {
    ImgLogo
  },
  methods: {
    choosePage(e) {
      setData(e.target.getAttribute("id"), this.$root.URL);
    },
    goOnCabinet() {
      redirect(this.$router);
    }
  }
};
</script>

<style src="../../styles/left-menu.css"></style>