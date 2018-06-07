<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button v-on:click="reverseMessage">nihao</button>
    {{name}}{{age}}
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      name: 'zhangsan',
      age: 18
    }
  },
  methods: {
    reverseMessage: function () {
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
