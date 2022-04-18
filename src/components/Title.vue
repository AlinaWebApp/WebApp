<template>
  <div class="content">
    <h1 class="title">
      О Банке | Статусбанк - надежный финансовый партнер на долгие годы
    </h1>
    <h2 class="under-title">История банка</h2>

    <div class="textcols">
      <div class="textcols-item">
        <div class="item">
          <b>2002 год</b>
        </div>
        <div class="text">
          <p>
            Создан ОАО «СтатусБанк» для обслуживания корпоративных клиентов -
            резидентов свободной экономической зоны «Минск» и нерезидентов
            Республики Беларусь, - а также частных клиентов - нерезидентов
            Республики Беларусь. С 2002 по 2013 ОАО «Международный резервный
            банк».
          </p>
        </div>
      </div>
      <div class="textcols-item">
        <div class="item">
          <b>2007 год</b>
        </div>
        <div class="text">
          <p>
            Была разработана и принята новая стратегия развития, которая
            предусматривала поэтапный переход Банка в разряд универсальных.
            Сегодня, продолжает работать в направлении обслуживания юридических
            лиц и индивидуальных предпринимателей.
          </p>
        </div>
      </div>
      <div class="textcols-item">
        <div class="item">
          <b>2012 год</b>
        </div>
        <div class="text">
          <p>
            Основным акционером Банка является ООО "Евроторг". Банк покоряет
            рынок Республики Беларусь уже 10 лет. За время работы на белорусском
            рынке Банк приобрел имидж надежного делового партнера, который
            оказывает своим клиентам финансовые услуги на самом высоком уровне.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="second-content">
    <div class="wrraper">
      <div class="mission">Наша миссия</div>
      <div class="mission-text">
        Удовлетворение потребностей наших клиентов в современных, доступных и
        качественных банковских услугах, содействие успеху в достижении целей и
        предоставление широкого спектра финансовых инструментов предприятиям
        всех форм собственности на базе клиентоориентированной,
        высокоэффективной, динамично развивающейся бизнес - модели, современных
        информационных технологий и высоких стандартов обслуживания.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  letter-spacing: 0px;
  font-weight: bold;
  font-size: 28px;
  text-transform: uppercase;
  font-family: "m-sb";
  margin-top: 41px;
  margin-left: 19px;
}
.under-title {
  letter-spacing: 0px;
  font-weight: normal;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  margin-top: 19px;
  margin-left: 19px;
}

.textcols {
  white-space: nowrap;
  font-size: 0;
}
.textcols-item {
  white-space: normal;
  display: inline-block;
  width: 30%;
  vertical-align: top;
  margin-right: 21px;
  font-size: 15px;
  margin-left: 21px;
  margin-top: 20px;
}
.item {
  font-family: "Montserrat", sans-serif;
}
.text {
  border: 1px solid black;
  padding: 10px;
  border-radius: 30px;
}
.textcols .textcols-item:last-child {
  margin-right: 0;
}
.second-content {
  width: 50%;
  margin-top: 2%;
}
.mission {
  letter-spacing: 0px;
  font-weight: normal;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  margin-top: 19px;
  margin-left: 19px;
}
.mission-text {
  margin-left: 20px;
  margin-top: 10px;
}
</style>
