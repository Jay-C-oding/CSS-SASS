<template>
  <div>
    <img :src="image" alt="picture of me" />
    <h1>
      Deine Herausforderung freundliche Frontend-Entwicklerin <br />
      mit Designer Wurzeln <br />in Hannover
    </h1>
  </div>
</template>

<script>
import selfie from '../assets/mypic.jpeg';
export default {
  name: 'about',
  data: function() {
    return {
      image: selfie,
    };
  },
};
</script>

<style scoped>
.picture {
  width: 20vw;
  height: 30vh;
  padding: 2vw;
}
</style>
