<template>
  <div class="main-container">
    <header-main-page />

    <div class="content-container">
      <title-about />
    </div>
  </div>
</template>

<script>
import HeaderMainPage from "../components/Header.vue";
import TitleAbout from "../components/Title.vue";
export default {
  components: { HeaderMainPage, TitleAbout },
};
</script>

<style scoped>
.main-container {
  height: 100vh;
}
</style>
