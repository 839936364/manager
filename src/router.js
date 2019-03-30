import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import login from "./components/login.vue";
import index from "./components/index.vue";
import users from "./components/users.vue";

const router = new VueRouter({
  routes: [
    {
      path: "/login",
      component: login
    },
    {
      path: "/",
      component: index,
      children: [
        {
          path: "users",
          component: users
        },
        {path:'/', redirect: 'users'}
      ]
    }
  ]
});
export default router;
