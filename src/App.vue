<template>
  <div id="app">
    <Left></Left>
    <Right></Right>
  </div>
</template>
<script>
import Left from "./components/left/Left.vue";
import Right from "./components/right/Right.vue";
export default {
  data() {
    return {};
  },
  components: {
    Left,
    Right
  }
};
</script>
<style lang="less">
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
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
