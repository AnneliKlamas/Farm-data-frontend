<template>
  <div>
    <h1>{{$t('tablePage.title')}}</h1>
    <Container>
      <Table />
    </Container>
  </div>
</template>

<script>
import Table from "./table"
import Container from "../ui/container"
export default {
  name: "TablePage",
  components: {Table, Container}
}
</script>

<style scoped>

</style>