<template>
  <div>
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/intro">Introduction</router-link> |
      <router-link to="/natour">NaTour</router-link> |
      <router-link to="/looplab">LoopLAB</router-link> |
      <router-link to="/googlefontclone">Google Fonts Clone</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
