<template>
  <b-table-simple hover>
    <b-thead>
      <b-tr>
        <b-th v-for="(column,index) in columns" :key="index">
          {{column}}
        </b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr class="hover" v-for="(data, index) in farmData" :key="index">
        <b-td>
          {{data.id}}
        </b-td>
        <b-td>
          {{data.farm}}
        </b-td>
        <b-td>
          {{ formatDate(data.date )}}
        </b-td>
        <b-td>
          {{data.metricType}}
        </b-td>
        <b-td>
          {{data.metricValue}}
        </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
</template>

<script>


import { createNamespacedHelpers } from 'vuex'
import {FETCH_FARM_DATA} from "./store/action-types";

const { mapGetters, mapActions } = createNamespacedHelpers('table')
export default {
  name: "Table",

  computed: {
    ...mapGetters({
      farmData: 'getFarmData'
    }),
  },

  async beforeMount() {
    await this.fetchFarmData()
  },

  data() {
    return {
      columns: ['ID','Farm', 'Date', 'Metric Type', 'Metric Value'],
    }
  },

  methods: {
    ...mapActions({
      fetchFarmData: FETCH_FARM_DATA
    }),

    formatDate(date) {
      return new Date(date)
    },
  }
}
</script>

<style scoped>
  .table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
    background: aliceblue;
  }
</style>