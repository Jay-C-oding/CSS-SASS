<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Powered by Vue, Vue-router and SASS
    </p>
    <h3 class="mainTitle">Schwerpunkte</h3>
    <section class="main">
      <article class="eachPage">
        <h4>Introduction</h4>
        <p>AOS Plugin, Flexbox oder Grid</p>
      </article>
      <article class="eachPage">
        <h4>NaTour</h4>
        <p>
          fortgeschrittene CSS und SASS <br />
          Animations durch CSS<br />
          BEM und CSS componenten
        </p>
      </article>
      <article class="eachPage">
        <h4>LoopLAB</h4>
        <p>Bootstrap Projekt</p>
      </article>
      <article class="eachPage">
        <h4>Google Fonts Clone</h4>
        <p>
          API, Axios und <br />
          allgemeine Vue Nutzung
        </p>
      </article>
    </section>
    <h2>Reicht noch nicht aus?</h2>
    <span
      ><h4>Check mal hier</h4>
      <br />
      <a href="http://github.com/Jay-C-oding/tsc-socket" class="link"
        >Typescript und Socket.io (Branche : Master)</a
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
<style scoped>
.hello {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 5%;
}
.main {
  display: flex;
}

.eachPage {
  margin: 1vw;
  width: 17vw;
  background-color: #e2e3de;
  color: #464543;
}
.link {
  font-size: 1.5rem;
  color: #787a79;
}
h1 {
  color: #464543;
}
h4 {
  color: #464543;
}
p {
  color: #464543;
}
</style>
