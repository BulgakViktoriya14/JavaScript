<template>
	 <div class="left">
            <aside class="menu" id="menu_col">
                <ImgLogo></ImgLogo>
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
            </aside>
     </div>
</template>

<script>
    import ImgLogo from '../img/ImgLogo.vue';
    import { bus } from '../../eventBus.js';
    
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
          }
        }
    }
</script>

<style src="../../styles/left-menu.css"></style>