<template>
  <b-table :items="farmData" :fields="fields" />
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers('table')

export default {
  name: "Table",

  computed: {
    ...mapGetters({
      farmData: 'getFarmData'
    })
  },

  data() {
    return {
      fields: ['farm', 'date', '', ''],
    }
  }
}
</script>

<style scoped>

</style>