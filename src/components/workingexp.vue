<template>
  <aside>
    <article
      data-aos="fade-right"
      data-aos-anchor-placement="top-center"
      class="work1"
    >
      <h5 class="work1title">Spielentwicklung Assistentin</h5>
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
}
</style>
