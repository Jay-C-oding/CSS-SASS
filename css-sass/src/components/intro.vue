<template>
  <div>
    <header>
      <img :src="image" alt="myPic" class="picture" />
      <h2 class="title">
        Deine Herausforderung freundliche <br />
        Entwicklerin mit Designer Wurzeln
      </h2>
    </header>
    <cv></cv>
  </div>
</template>

<script>
import imgSrc from '../assets/img-about/mypic.png';
import cv from '../components/CV.vue';

export default {
  name: 'introduction',
  components: {
    cv,
  },
  data: function() {
    return {
      image: imgSrc,
    };
  },
};
</script>

<style scoped>
header {
  height: 36vh;
  background-color: #e0d9cf;
  padding: 2%;
  margin-right: 5vw;
  margin-left: 5vw;
}
.picture {
  width: 25vw;
  position: absolute;
  left: 10%;
}
.title {
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 70%;
  margin: 0;
}
</style>
