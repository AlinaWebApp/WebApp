<template>
  <div class="main-container">
    <header-main-page />
    <div class="container-left">
      <credit-way-main-page />
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
.container-left {
  display: flex;
  align-items: center;
  height: 90%;
  width: 50%;
}
</style>
