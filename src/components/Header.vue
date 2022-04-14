<template>
  <header class="main-page-header">
    <div class="container">
      <div class="content-wrapper">
        <!-- методология бэм, элемент с классом content-wrapper__img-link находится внутри элемента с классои content-wrapper -->
        <router-link to="/main" class="content-wrapper__img-link">
          <img
            class="content-wrapper__img"
            src="../assets/header-logo.svg"
            alt="логотип Статусбанка"
          />
        </router-link>
        <ul class="content-wrapper__list">
          <li class="content-wrapper__item">
            <router-link to="/about" class="content-wrapper__link"
              >О нас</router-link
            >
          </li>
          <li class="content-wrapper__item">
            <router-link to="/documents" class="content-wrapper__link"
              >Документы</router-link
            >
          </li>
          <li class="content-wrapper__item">
            <router-link to="/credits" class="content-wrapper__link"
              >Кредиты</router-link
            >
          </li>
        </ul>
      </div>
      <div @click="logout" class="content-wrapper__link">Выйти</div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.axios.delete("http://localhost:8000/auth/logout"); // с помощью метода типа delete отправляем запрос на сервер чтобы мы вышли из акк
      setTimeout(() => this.$router.push("/")); //перекинуть на начальную стр
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  color: black;
  font-family: "Montserrat", sans-serif;
}
a {
  display: block;
}

.main-page-header {
  display: flex;
  align-items: center;
  height: 10%;
  border-bottom: solid 1px gray;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.content-wrapper {
  display: flex;
  gap: 30%;
}
.content-wrapper__img-link {
  width: 100%;
  height: 100%;
  margin-left: 10px;
}

.content-wrapper__img {
  height: 100%;
  width: 170px;
}
.content-wrapper__list {
  display: flex;
  align-items: center;
}
.content-wrapper__item {
  display: flex;
  justify-content: center;
  flex: 1;
  width: 90px;
  margin-right: 20px;
}

.content-wrapper__link {
  margin-right: 20px;
  cursor: pointer;
}
</style>
