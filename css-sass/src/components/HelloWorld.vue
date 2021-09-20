<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Powered by Vue, Vue-router and SASS
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 5%;
}
</style>
