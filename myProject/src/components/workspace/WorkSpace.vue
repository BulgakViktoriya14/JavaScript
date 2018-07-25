<template>
  <div class="app">
      <div class="back">
          <div class="back-overlay"></div>
      </div>
      <Header></Header>
      <div class="main">
          <Menu></Menu>
          <div class="content">
              <router-view></router-view>
          </div>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../header/Header';
  import Menu from '../menu/Menu';
  import Footer from '../footer/Footer';

  export default {
    data() {
      return {
         
      }
    },
    components: {
      Header,
      Menu,
      Footer
    },
  }
</script>

<style src="../../styles/main.css"></style>