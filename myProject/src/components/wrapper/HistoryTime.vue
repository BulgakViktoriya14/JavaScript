<template>
	<div class="old_reports">
        <div class="raw__list">
            <div class="raw" v-for="item in items">
                <p class="raw__date">25.06</p>
                <div class="raw__time">
                    <div class="raw_coming times">
                        <div class="time_header">
                            <p>Has come</p>
                        </div>
                        <p class="raw__time-text">01:52</p>
                    </div>
                    <div class="raw_dinner_in times">
                        <div class="time_header">
                           <p>Early lunch</p>
                        </div>
                        <p class="raw__time-text">01:52</p>
                    </div>
                    <div class="raw_dinner_out times" >
                        <div class="time_header">
                            <p>End of lunch</p>
                        </div>
                        <p class="raw__time-text">01:52</p>
                    </div>
                    <div class="raw_out times">
                        <div class="time_header">
                            <p>Gone</p>
                        </div>
                        <p class="raw__time-text">01:52</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
	data() {
		return {
		      items:[1,2,3]
		}
	}

}
</script>

<style>
</style>
