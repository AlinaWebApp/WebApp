import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
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

router.beforeEach(async (to) => {
  try {
    axios.defaults.withCredentials = true; //для каждого запроса запоминалась сессия

    const responce = await axios.get("http://localhost:8000/isAuthenticated"); // спрашиваю у сервера нахожусь ли в аккаунте

    const isAuth = responce.data; // и получаю ответ от сервера

    if (!isAuth && to.name !== "LoginPage") {
      // если мы не в акк.. чтобы мы не могли прописать путь для перехода на гл стр
      return {
        name: "LoginPage",
      };
    }
    if (isAuth && to.name === "LoginPage") {
      // если я в акк .. и пытаюсь зайти на начальную страницу-не могу зайти
      return {
        name: "MainPage",
      };
    }
  } catch (error) {
    console.error(error);
  }
});

export default router;
