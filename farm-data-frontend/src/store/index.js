import Vuex from "vuex";
import Vue from 'vue'

import table from "../pages/table-page/store/index"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        table: table
    }
})

