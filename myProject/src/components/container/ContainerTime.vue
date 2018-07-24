<template>
<div>
        <div class="report__date">
            <p>{{date}}</p>      
        </div>
        <div class="time_buttons" v-on:click="changeTimeTable" >
            <button id="come">Has come</button>
            <button id="startLunch">Early lunch</button>
            <button id="endLunch">End of lunch</button>
            <button id="gone">Gone</button>
        </div>
</div>
</template>

<script>
const map = {
    'come' : 'in',
    'endLunch' : 'Lunch',
    'startLunch' : 'Lunch',
    'gone' : 'out'
};
export default {
        data() {
            const date = new Date();
            return {
                date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
                time: `${date.getHours()}:${date.getMinutes()}`,
                sendTime: function(obj) {
                    console.log(this.time);
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
                const event = map[e.target.getAttribute("id")]; 
                console.log(event);
                this.sendTime(event);
            } 
        },
        
       
    }
</script>

<style>
</style>