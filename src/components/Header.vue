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
      <router-link to="/logout" class="content-wrapper__link"
        >Выйти</router-link
      >
    </div>
  </header>
  <div class="container-left">
    <div class="container-left-wr">
      <div class="content-box">
        <ul class="content-box_list">
          <li class="content-box_item">Выбрать кредит</li>
          <li class="content-box_item">Выставить нужную сумму</li>
          <li class="content-box_item">Выбрать период</li>
          <li class="content-box_item">Нажать кнопку оформить</li>
        </ul>

        <a href="/types" class="shine-button">Кредиты</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  color: black;
}
a {
  display: block;
}

.main-page-header {
  display: flex;
  align-items: center;
  height: 10vh;
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
}

.content-wrapper__link {
  margin-right: 20px;
}

.container-left {
  float: left;
  width: 50%;
  height: 100vh;
}
.container-left-wr {
  display: flex;
  justify-content: center;
  margin-top: 25%;
  height: 50vh;
}
.content-box_list {
  list-style: none;
  font-family: "Lucida Sans";
}
.content-box_item {
  position: relative;
  padding: 20px 0 20px 40px;
  color: #33333391;
  font-variant: small-caps;
  font-weight: bold;
  cursor: pointer;
}
.content-box_item::before {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4f5151;
  content: "";
  left: 0;
  transition: 0.3s ease-in-out;
  top: 27px;
}
.content-wrapper__item::after {
  position: absolute;
  border-left: 1px dotted #4f5151;
  width: 1px;
  bottom: -12px;
  content: "";
  left: 153px;
  top: 240px;
  height: 177px;
}
.content-wrapper__item:hover::before {
  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.2);
}
.content-box_item:last-child::after {
  content: none;
}

body {
  background: #ffbfbe;
}
.shine-button {
  text-decoration: none;
  display: inline-block;
  padding: 10px 30px;
  margin-top: 38px;
  position: relative;
  overflow: hidden;
  border: 2px solid #3c97bf;
  border-radius: 8px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #3c97bf;
  transition: 0.2s ease-in-out;
}
.shine-button:before {
  content: "";
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.5)
  );
  height: 50px;
  width: 50px;
  position: absolute;
  top: -8px;
  left: -75px;
  transform: skewX(-45deg);
}
.shine-button:hover {
  background: #cbe04a;
  color: #fff;
}
.shine-button:hover:before {
  left: 150px;
  transition: 0.5s ease-in-out;
}
</style>
