<template>
  <div class="loans-tab">
    <div class="container">
      <h1 class="main-title">Кредиты в банке</h1>
    </div>
    <div class="group-button">
        <div class="group-button-wr">
      <router-link to="/u" class="buttonU">Универсальные</router-link>
      <router-link to="/r" class="buttonR">Рефинансирование</router-link>
      <router-link to="/o" class="buttonO">Овердрафтные кредиты</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-title {
  letter-spacing: 0px;
  font-weight: bold;
  font-size: 28px;
  text-transform: uppercase;
  font-family: "m-sb";
  margin-top: 41px;
  margin-left: 19px;
}
.group-button-wr {
    margin-top: 20px;
    margin-left: 19px;
    display: flex;
    
}


</style>
