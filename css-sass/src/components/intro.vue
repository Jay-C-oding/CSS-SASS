<template>
  <header>
    <img :src="image" alt="myPic" />
    <h2>
      Deine Herausforderung freundliche <br />
      Entwicklerin mit Designer Wurzeln
    </h2>
  </header>
</template>

<script>
import imagesrc from '../assets/img-about/mypic.png';
export default {
  name: 'intro',
  data: function() {
    return {
      image: imagesrc,
    };
  },
};
</script>
