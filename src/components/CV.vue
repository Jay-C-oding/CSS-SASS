<template>
  <div>
    <h3 class="title">Lebenslauf</h3>
    <div id="lebenslauf">
      <section id="arbeit">
        <h4 class="subText">Arbeit</h4>
        <working-exp class="workExp"></working-exp>
      </section>
      <section class="year">
        <h6 class="eachYear">2021</h6>
        <h6 class="eachYear">2020</h6>
        <h6 class="eachYear">2019</h6>
        <h6 class="eachYear">2018</h6>
        <h6 class="eachYear">2017</h6>
        <h6 class="eachYear">2016</h6>
        <h6 class="eachYear">2015</h6>
        <h6 class="eachYear">2014</h6>
        <h6 class="eachYear">2013</h6>
        <h6 class="eachYear">2012</h6>
        <h6 class="eachYear">2011</h6>
        <h6 class="eachYear">2010</h6>
        <h6 class="eachYear">2009</h6>
        <h6 class="eachYear">2008</h6>
      </section>
      <section id="studium">
        <h4 class="subText">Studium | Bildung</h4>
        <studium-bildung></studium-bildung>
      </section>
    </div>
  </div>
</template>

<script>
import workingExp from '../components/workingexp.vue';
import studiumBildung from './studium-bildung.vue';

export default {
  name: 'cv',
  components: {
    workingExp,
    studiumBildung,
  },
};
</script>

<style scoped>
.title {
  font-size: 2rem;
  color: #464543;
}
.year {
  width: 10vw;
  padding-top: 7%;
}
#lebenslauf {
  width: 80vw;
  display: flex;
  margin-left: 10vw;
  margin-right: 5vw;
}
#arbeit {
  background-color: #787a79;
  height: 60vh;
  width: 50%;
  color: #e0d9cf;
}
#studium {
  height: 150vh;
  width: 50%;
  color: #464543;
  background-color: #e0d9cf;
}

.subText {
  font-size: 1.25rem;
}

.eachYear {
  margin-bottom: 7vh;
  font-size: 0.8rem;
}
</style>
