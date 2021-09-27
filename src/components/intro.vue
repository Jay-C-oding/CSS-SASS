<template>
  <div>
    <header id="header">
      <img :src="image" alt="myPic" class="picture" />
      <div class="title">
        <h1 class="titleText">
          Deine Herausforderung freundliche <br />
          Entwicklerin mit Designer Wurzeln
        </h1>
      </div>
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
#header {
  height: 35vh;
  margin-right: 5vw;
  margin-left: 5vw;
  margin-top: 2vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.picture {
  width: 20%;
  position: relative;
}
.title {
  position: relative;
  margin: 0;
  width: 40vw;
  height: 15vh;
}
.titleText {
  font-size: 1.5rem;
  display: contents;
  color: #464543;
}
</style>
