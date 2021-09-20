<template>
  <header class="header">
    <div class="logoBox">
      <img :src="image" alt="Logo" class="logo" />
    </div>
    <div class="textBox">
      <h1 class="headingPrimary">
        <span class="headingPrimaryMain">OUTDOORS</span>
        <span class="headingPrimarySub"> is where life begins</span>
      </h1>
      <a href="#" class="btn btn-white">Discover Our Tour</a>
    </div>
  </header>
</template>

<script>
import image from '../assets/img-natour/logo-white.png';

export default {
  name: 'natour',
  data: function() {
    return {
      image: image,
    };
  },
};
</script>

<style scoped>
body {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: #777;
  padding: 30px;
}

.header {
  height: 95vh;
  background-image: linear-gradient(to right bottom, #7ed56fb4, #28b485),
    url(../assets/img-natour/hero.jpg);
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  position: relative;
}

.logoBox {
  position: absolute;
  top: 40px;
  left: 40px;
}

.logo {
  height: 35px;
}

.textBox {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.headingPrimary {
  color: white;
  backface-visibility: hidden;
  margin-bottom: 20px;
}

.headingPrimaryMain {
  display: block;
  font-size: 60px;
  letter-spacing: 35px;
  font-weight: 400;

  animation-name: moveInLeft;
  animation-duration: 1.8s;
}

.headingPrimarySub {
  display: block;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 21.5px;
  animation-name: moveInRight;
  animation-duration: 2.3s;
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  80% {
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  80% {
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
}

.btn-white {
  background-color: white;
  color: #777;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.253);
}
.btn:active {
  transform: translateY(-1px);
}
</style>
