import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import index from "./components/index.vue";
import login from "./components/login.vue";

const router = new VueRouter({
  routes: [
    { path: "/", component: index },
    { path: "/login", component: login },
  ]
});
export default router;