<template>
	<div class="old_reports">
        <div class="raw__list">
            <div class="raw" v-for="item of items" :key="item.id" @click="clickOnRecord">
                <input type="hidden" :value="item.id"/>
                <p class="raw__date">{{item.Date}}</p>
                <div class="raw__time">
                    <div class="raw_coming times">
                        <div class="time_header">
                            <p>Has come</p>
                        </div>
                        <p class="raw__time-text">{{item.In}}</p>
                    </div>
                    <div class="raw_dinner_in times">
                        <div class="time_header">
                           <p>Early lunch</p>
                        </div>
                        <p class="raw__time-text">{{item.StartLunch}}</p>
                    </div>
                    <div class="raw_dinner_out times" >
                        <div class="time_header">
                            <p>End of lunch</p>
                        </div>
                        <p class="raw__time-text">{{item.EndLunch}}</p>
                    </div>
                    <div class="raw_out times">
                        <div class="time_header">
                            <p>Gone</p>
                        </div>
                        <p class="raw__time-text">{{item.Out}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import request from '../../request';
	export default {
	data() {
		return {
		      items:[]
		}
    },
    created() {
        const xhr = request('GET', `${this.$root.URL}/api/timetables`, null);
        xhr.onload = () => {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                let [startLunch, endLunch] = [null, null];
                if (data.Lunch) [startLunch, endLunch] = data.Lunch.parse('@');
                data.StartLunch = startLunch;
                data.EndLunch = endLunch; 
                this.items = data;
            }
        }
    },
    methods : {
        clickOnRecord() {
            
        }
    }
}
</script>

<style>
</style>
