import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login/index"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
