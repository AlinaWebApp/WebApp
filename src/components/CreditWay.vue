<template>
  <div class="container-left-wr">
    <div class="content-box">
      <ul class="content-box_list">
        <li class="content-box_item">Выбрать кредит</li>
        <li class="content-box_item">Выставить нужную сумму</li>
        <li class="content-box_item">Выбрать период</li>
        <li class="content-box_item">Нажать кнопку оформить</li>
      </ul>
      <router-link to="/types" class="shine-button">Кредиты</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.container-left-wr {
  display: flex;
  justify-content: center;
  margin-left: 25%;
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
  left: 262px;
  top: 293px;
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
  width: 40%;
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
  text-align: center;
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
