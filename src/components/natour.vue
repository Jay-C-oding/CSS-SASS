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
@import '../style/abstracts/functions';
@import '../style/abstracts/variables';

@import '../style/base/base';
@import '../style/base/animations';
@import '../style/base/typography';
@import '../style/base/utility';

@import '../style/components/button';

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
</style>
