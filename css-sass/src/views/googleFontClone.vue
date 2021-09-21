<template>
  <div>
    <my-header></my-header>
    <font-input></font-input>
  </div>
</template>

<script>
import myHeader from '../components/googleFont/myHeader.vue';
import fontInput from '../components/googleFont/fontInput.vue';

export default {
  name: 'googleFontClone',
  components: {
    myHeader,
    fontInput,
  },
};
</script>
