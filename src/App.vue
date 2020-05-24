<template>
  <div id="app">

    <topheader></topheader>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/secret">Secret</router-link> |
      <router-link to="/register">Registrer</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script>
import Topheader from '@/components/Topheader.vue';

export default {
  components: {
  'topheader': Topheader
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #E76F51;
    }
  }
}
</style>
