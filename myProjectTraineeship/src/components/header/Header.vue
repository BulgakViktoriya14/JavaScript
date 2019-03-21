<template>
	<div class="top_menu">  
        <div class="header">
            <div class="name">
                <h1>WorkSpace</h1>
            </div>
            <div class="header__user">
                <imgUser></imgUser>
            </div>
        </div>
    </div>
</template>

<script>
import imgUser from "../img/ImgUser.vue";
export default {
  data() {
    return {

    };
  },
  components: {
    imgUser
  }
};
</script>

<style src="../../styles/header.css"></style>