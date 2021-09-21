<template>
  <aside>
    <article
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      class="work1"
    >
      <h5 class="work1title">Spielentwicklung Assistentin</h5>
      <h6 class="workPeriod">so-na AG, 02.2021 - 05.2021</h6>
      <p class="workDetail">
        - Assistenz der Geschäftsführung <br />
        (Recherche, Organisation, Projektmanagement) <br />
        - Grundlagen Programmierung in Unity <br />
        (allgemeine Licht, vorbereitung von Animation, allgemeine Vorbereitung
        von Hintergrund)
      </p>
    </article>
    <article class="work2"></article>
  </aside>
</template>

<script>
export default {
  name: 'workingExp',
};
</script>

<style scoped>
.work1 {
  width: 30vw;
  height: 25vh;
  background-color: #e0d9cf;
  clip-path: polygon(0 0, 100% 0, 90% 10%, 90% 100%, 0 100%);
  position: relative;
  left: 15%;
}
.work1title {
  color: #787a79;
  position: relative;
  top: 5%;
  font-size: 1rem;
  right: 5%;
  margin-top: 0;
  margin-bottom: 1.5vh;
}
.workPeriod {
  color: #787a79;
  position: relative;
  margin: 0;
  width: 20vw;
  left: 25%;
  margin-bottom: 1vh;
}
.workDetail {
  color: #787a79;
  position: relative;
  left: 5%;
  font-size: 0.8rem;
  width: 22vw;
  margin: 0;
}
</style>
