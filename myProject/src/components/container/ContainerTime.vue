<template>
<div>
        <div class="report__date">
            <h1>{{date}}</h1>     
        </div>
        <div class="time_buttons" @click="changeTimeTable" >
            <button id="come">Has come</button>
            <button id="startLunch">Early lunch</button>
            <button id="endLunch">End of lunch</button>
            <button id="gone">Gone</button>
        </div>
</div>
</template>

<script>
import request from '../../request';
import {getDate, getTime} from '../../helpers/date';
const map = {
    'come' : 'In',
    'endLunch' : 'Lunch',
    'startLunch' : 'Lunch',
    'gone' : 'Out'
};
export default {
        data() {
            return {
                date: getDate(),
                time: getTime()
            }
        },
        methods: {
            changeTimeTable(e) {
                const data = map[e.target.getAttribute("id")]; 

            } 
        },
    }
</script>

<style>
</style>