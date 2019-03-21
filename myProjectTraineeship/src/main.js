import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes.js';
import {store} from './vuex';
Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes
});
router.beforeEach((to, from, next) => {
  const login = localStorage.getItem('login');
  const {length} = to.matched;
  if (login)  {
    if (!length) next('/WorkSpace/NotFound');
    else next(); 
  }
  else {
    if (!length) next('/');
  }
  next();
})

new Vue({
  el: '#app',
  data: {
  	URL: "http://laptev-pc:3030"
  },
  router,
  store,
  render: h => h(App),
})
