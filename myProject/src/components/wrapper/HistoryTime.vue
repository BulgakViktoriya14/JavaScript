<template>
	<div class="old_reports">
        <div class="raw__list">
            <div class="raw" v-for="item in items">
                <p class="raw__date">25.06</p>
                <div class="raw__time">
                    <div class="raw_coming times">
                        <div class="time_header">
                            <p>Пришёл</p>
                        </div>
                        <p class="raw__time-text">01:52</p>
                    </div>
                    <div class="raw_dinner_in times">
                        <div class="time_header">
                            <p>Начало обеда</p>
                        </div>
                        <p class="raw__time-text">01:52</p>
                    </div>
                    <div class="raw_dinner_out times" >
                        <div class="time_header">
                            <p>Конец обеда</p>
                        </div>
                        <p class="raw__time-text">01:52</p>
                    </div>
                    <div class="raw_out times">
                        <div class="time_header">
                            <p>Ушёл</p>
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
		      items:[]
		}
	}

}
</script>

<style>
</style>
