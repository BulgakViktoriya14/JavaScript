<template>
<div>
        <div class="report__date">
            <p>{{date}}</p>      
        </div>
        <div class="time_buttons" v-on:click="changeTimeTable" >
  			<button id="come">Пришёл</button>
            <button id="startLunch">Начало обеда</button>
            <button id="endLunch">Конец обеда</button>
            <button id="gone">Ушёл</button>
        </div>
</div>
</template>

<script>

	export default {
		data() {
			return {
				date: new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear(),
                time: new Date().getHours() + ":" + new Date().getMinutes(),
                sendTime: function(obj) {
                    console.log(this.time);
                    const URL ='http://192.168.0.117:3030';
                    const xhr = new XMLHttpRequest();
                    xhr.open('PUT', this.$root.URL+`/api/timetables/1`); 
                    xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" ); 
                    xhr.withCredentials = true; 
                    xhr.send(`obj=${this.time}`);
                    xhr.onload = function() {
                        console.log(xhr.responseText); 
                    }
                }
			}
		},
        methods: {
            changeTimeTable(e) {
                if(e.target.getAttribute("id") == "come") {
                    console.log("come");
                    this.sendTime("in"); 
                }
                if(e.target.getAttribute("id") == "endLunch" || e.target.getAttribute("id") == "startLunch") {
                    console.log("end lunch");
                    this.sendTime("Lunch");
                }
                if(e.target.getAttribute("id") == "gone") {
                    console.log("gone");
                     this.sendTime("out");
                }
            } 
        },
        
       
	}
</script>

<style>
</style>