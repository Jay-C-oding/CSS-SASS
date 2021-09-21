<template>
  <header>
    <div class="menu">
      <img :src="image" id="logo" />
      <div class="menuIcon">CATALOG</div>
      <div class="menuIcon">FEATURED</div>
      <div class="menuIcon">ARTICLES</div>
      <div class="menuIcon">ABOUT</div>
    </div>
  </header>
</template>

<script>
import img from '@/assets/google_fonts.png';
export default {
  name: 'myHeader',
  data() {
    return {
      image: img,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  border-bottom: 2px solid darkslategrey;
  max-height: 10vh;
}
#logo {
  height: 25px;
  margin-bottom: 10px;
  position: relative;
  left: 0;
  margin-right: 10px;
}
.menu {
  color: darkslategray;
  font-family: sans-serif;
  grid-area: menu;
  display: flex;
  justify-content: space-between;
}

.menuIcon {
  display: inline-block;
  font-weight: 100;
  vertical-align: middle;
  position: relative;
  font-size: 15px;
  margin-bottom: 0;
  margin-top: 5px;
}
</style>
