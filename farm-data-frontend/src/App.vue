<template>
  <div id="app">
    <TablePage />
  </div>
</template>

<script>
import TablePage from "@/pages/TablePage/table-page";

export default {
  name: 'App',
  components: {
    TablePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
