<template>
  <div class="main-container">
    <header-main-page />
  </div>
</template>

<script>
import HeaderMainPage from "../components/Header.vue";
export default {
  components: { HeaderMainPage },
};
</script>

<style scoped>
.main-container {
  height: 100vh;
}
</style>
