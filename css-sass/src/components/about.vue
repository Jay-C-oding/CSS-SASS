<template>
  <div>
    <img :src="pic" alt="picture of me" class="picture" />
    <h1>
      Deine Herausforderung freundliche Frontend-Entwicklerin <br />
      mit Designer Wurzeln <br />in Hannover
    </h1>
  </div>
</template>

<script>
import selfie from '../assets/img-about/mypic.jpeg';

export default {
  name: 'About',
  data: function() {
    return {
      pic: selfie,
    };
  },
};
</script>

<style scoped>
.picture {
  width: 30vw;
}
</style>
