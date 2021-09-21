<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Powered by Vue, Vue-router and SASS
    </p>
    <section>
      <h3>Schwerpunkte</h3>
      <article>
        <h4>Introduction</h4>
        <p>AOS Plugin, Flexbox oder Grid</p>
      </article>
      <article>
        <h4>NaTour</h4>
        <p>
          fortgeschrittene CSS und SASS <br />
          Animations durch CSS
        </p>
      </article>
      <article>
        <h4>LoopLAB</h4>
        <p>Bootstrap Projekt</p>
      </article>
      <article>
        <h4>Google Fonts Clone</h4>
        <p>API, Axios und allgemeine Vue Nutzung</p>
      </article>
    </section>
    <h2>Reicht noch nicht aus?</h2>
    <span
      ><h4>Check mal hier</h4>
      <br />
      <a href="http://github.com/Jay-C-oding/tsc-socket"
        >Typescript und Socket.io</a
      >
    </span>
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
