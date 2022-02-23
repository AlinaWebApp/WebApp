<template>
  <div class="container">
    <div class="auth">
      <div class="auth__login-container">
        <!--Связывает label с input у которого имя такое же как название label -->
        <label for="login">Логин</label>
        <input type="text" name="login" class="auth__login" />
      </div>

      <div class="auth__password-container">
        <label for="pass">Пароль</label>
        <input type="password" name="pass" class="auth__password" />
      </div>

      <div class="auth__btn-container">
        <button @click="authUser" class="auth__btn">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    authUser() {
      console.log(this);
      this.$router.push("/user"); //переход на новую страницу с добавлением в путь /user
    },
  },
};
</script>

<style scoped>
.container {
  /* Отображать как flex.. способ отображения*/
  display: flex;
  justify-content: center; /*Размещение по центру слева направо, когда дисплей flex*/
  align-items: center; /*Размещение по центру сверху вних, когда дисплей flex*/
  height: 100vh;
}
.auth__login,
.auth__password {
  display: block;
}

.auth__password-container {
  margin-top: 13px;
}

.auth__btn-container {
  display: flex;
  justify-content: center;
  margin-top: 13px;
}
</style>
