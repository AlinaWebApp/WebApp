import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "../views/AuthPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LoginPage",
      component: AuthPage,
    },
    {
      path: "/main",
      name: "MainPage",
      component: () => import("../views/MainPage.vue"), // => стрелочная функция (функция без параметров), когда функция вызывается происходит импортирование 
    },
  ],
});

export default router;
