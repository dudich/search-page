<template>
  <div id="app">
    <SearchPage/>
  </div>
</template>

<script>
import SearchPage from './components/SearchPage'

export default {
  components: {
    SearchPage
  },
  created() {
    this.$store.dispatch('fetchProperties');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 60px;
}
  body {
    margin: 0;
    background-color: #EBECED;
  }
</style>
