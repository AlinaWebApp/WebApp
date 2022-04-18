<template>
  <div class="main-content">
    <header-main-page />
    <div class="content">
      <types-credits />
    </div>
  </div>
</template>

<script>
import HeaderMainPage from "../components/Header.vue";
import TypesCredits from "../components/TypesCredits.vue";

export default {
  components: { HeaderMainPage, TypesCredits },
};
</script>

<style scoped>
.main-content {
  height: 100vh;
}
</style>
