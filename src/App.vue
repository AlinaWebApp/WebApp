<template>
  <div>
    <div v-for="number in numbers" :key="number">{{ number }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
}
</style>
