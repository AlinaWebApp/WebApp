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
      path: "/main/:name", //динамический параметр, после слэша может быть любой путь
      name: "MainPage",
      component: () => import("../views/MainPage.vue"), // => стрелочная функция (функция без параметров), когда функция вызывается происходит импортирование
    },
    {
      path: "/about",
      name: "AboutUs",
      component: () => import("../views/AboutUs.vue"),
    },
    {
      path: "/credits",
      name: "Credits",
      component: () => import("../views/Credits.vue"),
    },
  ],
});

router.beforeEach(async (to) => {
  try {
    axios.defaults.withCredentials = true; //для каждого запроса запоминалась сессия

    const responce = await axios.get("http://localhost:8000/isAuthenticated"); // спрашиваю у сервера нахожусь ли в аккаунте

    const isAuth = responce.data; // и получаю ответ от сервера

    // если мы не в акк.. чтобы мы не могли прописать путь для перехода на гл стр
    if (!isAuth && to.name !== "LoginPage") {
      return {
        name: "LoginPage",
      };
    }

    // если я в акк .. и пытаюсь зайти на начальную страницу-не могу зайти
    if (isAuth && to.name === "LoginPage") {
      return {
        name: "MainPage",
        params: {
          name: isAuth,
        },
      };
    }

    if (to.fullPath === "/main") {
      return {
        name: "MainPage",
        params: {
          name: isAuth,
        },
      };
    }
  } catch (error) {
    console.error(error);
  }
});

export default router;
