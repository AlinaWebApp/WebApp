<template>
  <div class="main-container">
    <header-main-page />
    <div class="content-container">
      <div class="container-left">
        <credit-way-main-page />
      </div>
      <div class="container-right">
        <div class="backgroud-text">Приветствуем, {{ $route.params.name }}</div>
        <div class="background"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMainPage from "../components/Header.vue";
import CreditWayMainPage from "../components/CreditWay.vue"; // импортируем компоненты из компонентов (берем и вставляем на страницу главную)

export default {
  components: {
    HeaderMainPage,
    CreditWayMainPage,
  },
}; // здесь мы подключаем наши компоненты
</script>

<style scoped>
.main-container {
  height: 100vh;
}
.content-container {
  display: flex;
  flex-grow: 1;
  position: relative;
  height: 90%;
}
.container-left {
  display: flex;
  align-items: center;
  height: 100%;
  width: 50%;
}
.background {
  background-image: url("../assets/hello.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
  width: 73%;
  height: 100%;
  top: calc(24% - 3px);
}
.container-right {
  position: relative;
  width: 50%;
  height: 81%;
}
.backgroud-text {
  position: absolute;
  left: 22%;
  top: 15%;
  font-family: "Montserrat", sans-serif;
}
</style>
