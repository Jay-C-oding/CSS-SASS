<template>
  <header class="header">
    <div class="header__logobox">
      <img :src="image" alt="Logo" class="header__logo" />
    </div>
    <div class="header__textBox">
      <h1 class="headingPrimary">
        <span class="headingPrimary--Main">OUTDOORS</span>
        <span class="headingPrimary--Sub"> is where life begins</span>
      </h1>
      <a href="#" class="btn btn--white btn--animated">Discover Our Tour</a>
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

<style lang="scss" scoped>
@import '../style/base/base';
@import '../style/base/animations';
@import '../style/base/typography';
@import '../style/base/utility';

$color-primary: #55c57a;
$color-primary-light: #7ed56f;
$color-primary-dark: #28b485;
$color-grey-dark: #777;
$color-white: #fff;
$color-black: #000;

html {
  font-size: 62.5%;
}
body {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
  color: #777;
  padding: 3rem;
}

.header {
  height: 95vh;
  background-image: linear-gradient(to right bottom, #7ed56fb4, #28b485),
    url(../assets/img-natour/hero.jpg);
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  position: relative;

  &__logobox {
    position: absolute;
    top: 3rem;
    left: 3rem;
  }
  &__logo {
    height: 3rem;
  }
  &__textBox {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}

.headingPrimary {
  color: white;
  backface-visibility: hidden;
  margin-bottom: 2rem;

  &--Main {
    display: block;
    font-size: 6rem;
    letter-spacing: 3.5rem;
    font-weight: 400;

    animation-name: moveInLeft;
    animation-duration: 1.8s;
  }

  &--Sub {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2rem;
    animation-name: moveInRight;
    animation-duration: 2.3s;
  }
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
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
    transform: translateX(10rem);
  }
  80% {
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.btn {
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
  }

  &--white {
    background-color: $color-white;
    color: $color-grey-dark;

    &::after {
      background-color: $color-white;
    }
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba($color-black, 0.253);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba($color-black, 0.2);
  }
  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all, 0.4s;
  }

  &--animated {
    animation: moveInBottom 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
  }
}
</style>
