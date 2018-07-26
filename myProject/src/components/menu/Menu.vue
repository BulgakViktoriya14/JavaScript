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
                            <router-link tag="a" to="/WorkSpace/WorkTime" id="worktime">Work Time</router-link>
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
                    <a href="#" class="user_image"  @click="goOnCabinet"><img  src="../../img/CUser.png"></a>
                    <h1>Personal cabinet</h1>
                </div>
            </aside>
        </div>
    </div>
</template>

<script>
    import ImgLogo from '../img/ImgLogo.vue';
    import { bus } from '../../eventBus.js';
    import request from "../../request.js"
    
    export default {
        data() {
            return {
                arrRep:[],
                arrTime:[],
                arrTasks:[],
                getContent: function(path,arr) {
                    const xhr = new XMLHttpRequest(); 
                    xhr.open('GET', `${this.$root.URL}/api/${path}`); 
                    xhr.withCredentials = true; 
                    xhr.send(null);
                    xhr.onload = function() {
                        console.log(xhr.responseText);
                        arr = JSON.parse(xhr.responseText); 
                        bus.$emit("load",arr);
                    }
                } 
            }
        },
        components: {
            ImgLogo
        },
        methods: {
          choosePage(e) {
            bus.$emit("getUser",e);
            if(e.target.getAttribute("id") == "worktime") {
                console.log("worktime");
                this.getContent("timetables",this.arrTime);
            }
            if(e.target.getAttribute("id") == "reports") {
                console.log("reports");
                this.getContent("reports",this.arrRep);
            }
            if(e.target.getAttribute("id") == "tasks") {
                console.log("tasks");
                this.getContent("tasks",this.arrTasks);
            }
          },
          goOnCabinet() {
            const xhr = request(
                "GET",
                `${this.$root.URL}/api/users`
            );
            xhr.onload = function() {
                let currUser = JSON.parse(xhr.responseText);
                if(currUser.Role == "admin") {
                    window.location.href = `/WorkSpace/Admin?Name=${currUser.Name}`;
                }
                if(currUser.Role == "user" || currUser.Role == "helper") {
                    window.location.href == `/WorkSpace/User?Name=${currUser.Name}`;
                }
            } 
          }
        }
    }
</script>

<style src="../../styles/left-menu.css"></style>