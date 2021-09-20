<template>
  <div>
    <h3 class="title">Lebenslauf</h3>
    <div id="lebenslauf">
      <section id="arbeit">
        <h4>Arbeit</h4>
        <working-exp class="workExp"></working-exp>
      </section>
      <section id="studium">
        <h4>Studium</h4>
      </section>
    </div>
  </div>
</template>

<script>
import workingExp from '../components/workingexp.vue';
export default {
  name: 'cv',
  components: {
    workingExp,
  },
};
</script>

<style scoped>
#lebenslauf {
  width: 90vw;
  display: flex;
  margin-left: 2.5vw;
  margin-right: 2.5vw;
}
#arbeit {
  border-right: 10px, solid, #464543;
  background-color: #787a79;
  height: 150vh;
  width: 50%;
  color: #e0d9cf;
}
#studium {
  height: 100vh;
  width: 50%;
  color: #464543;
}
</style>
