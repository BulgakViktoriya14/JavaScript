<template>
    <div>
        <input type="checkbox" id="menu">
        <label for="menu" onclick>
            <ImgLogo></ImgLogo>
        </label>
        <div class="left">
            <aside class="menu off-canvas" id="menu_col">
                <img class="close_button" src="../../img/close.png">
                <a href="#" class="logo"><img src="../../img/logo.png" ></a>
                <nav class="menu__nav">
                    <ul class="menu__list " @click="choosePage">
                        <li class="menu__item time">
                            <router-link tag="a" to="/WorkSpace/WorkTime" id="timetables">Work Time</router-link>
                        </li>
                        <li class="menu__item reports">
                             <router-link tag="a" to="/WorkSpace/Reports" id="reports">Reports</router-link>
                        </li>
                        <li class="menu__item tasks">
                            <router-link tag="a" to="/WorkSpace/Tasks" id="tasks">Tasks</router-link>
                        </li>
                    </ul>
                </nav>
                <div class=menu_footer>
-                    <a href="#" class="user_image"  @click="goOnCabinet"><img  src="../../img/CUser.png"></a>
                     <h1>Personal cabinet</h1>
                 </div>
            </aside>
        </div>
    </div>
</template>

<script>
import ImgLogo from "../img/ImgLogo.vue";
import { bus } from "../../eventBus";
import request from "../../request";
import { capitalize } from "../../helpers/format";

export default {
  data() {
    return {
      data: [],
      getContent: (path, arr) => {
        const xhr = request("GET", `${this.$root.URL}/api/${path}`, null);
        xhr.onload = function() {
          arr = JSON.parse(xhr.responseText);
          path = capitalize(path); //example : "timetables" -> "Timetables"
          bus.$emit(`load${path}`, arr);
        };
      }
    };
  },
  components: {
    ImgLogo
  },
  methods: {
    choosePage(e) {
      this.getContent(e.target.getAttribute("id"), this.data);
    },
    goOnCabinet() {
      window.location.href = "/WorkSpace/User";
    }
  }
};
</script>

<style src="../../styles/left-menu.css"></style>